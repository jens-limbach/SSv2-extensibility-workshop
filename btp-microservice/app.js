var express = require( 'express')
var app = express()
const axios = require('axios');

token = Buffer.from(`${process.env.SSC_USER}:${process.env.SSC_PASSWORD}`).toString('base64')
base_url = `${process.env.SERVICE_URL}/sap/c4c/api`

axios.defaults.headers.common['Authorization'] = `Basic ${token}`
axios.defaults.headers.common['content-type'] = "application/json"

app.use(express.json());

console.log("Start....")

// webhook endpoint for custom logic
app.post( '/onCreateSubCase', async function(req, res) {
    // Extract data from event body. 
    id = req.body.data.currentImage.id
    data = req.body
    // Vaildate if case has a parent case
    if(data.data && data.data.currentImage && !data.data.currentImage.parentCaseId){
      // Create new sub-case
      subCaseData = {
        "subject": `Sub Case of ${data.data.currentImage.displayId}`,
        "caseType": "ZCAS",
        "origin": "MANUAL_DATA_ENTRY",
        "status": "01",
        "priority": "03",
        "account": {
          "id": data.data.currentImage.account.id
        },
            "relatedObjects": [
            {
                "objectId": id,
                "type": "2886",
                "role": "13"
            }
        ]
      }

      await axios.post(`${base_url}/v1/case-service/cases`, subCaseData)
      .then(function (response) {
        console.log(response)
        
      })
      .catch(function (error) {          // handle error
          console.log(error);
          res.status(500)
        })
    }
    // Send response
    res.end()
})

// webhook endpoint for customer insights on account overview
app.post('/customPieChart', function(req, res) {
  // Provide JSON response
  const response = {
    "total": 35.0,
    "data": [
    {
    "name": "Incomplete data",
    "y": 7
    },
    {
    "name": "Credit blocks",
    "y": 18
    },
    {
    "name": "Billing blocks",
    "y": 10
    }
    ]
    };

    
app.get('/health', async function(req, res){
  // Test if the connection with the service cloud tenant works
  await axios.get(`${base_url}/v1/case-service/cases`)
    .then(function(response){
      console.log("Healthy - which means I could reach your SSv2")
      res.send("OK")
    })
    .catch(function(error){
      console.log(error)
      res.status(500)
      res.send("Error")
    })
  
  res.end()
})


  
  res.json(response);
  });

app.listen( process.env.PORT || 4000)

