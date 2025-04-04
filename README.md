# BTP Frontend Application Development

Welcome to your first journey in creating BTP frontend applications as a professional code developer! This guide will provide step-by-step instructions accompanied by live sessions, allowing you to become proficient in V2 development. After completing these steps, you’ll be able to develop:

- Full applications embedded via mashup and generate with AI
- Microservices with small cloud functions with custom business logic
- Microservices with small cloud functions to extend the customer 360 with third-party data

## Table of Contents

- [Part 1: Deploying a Basic Website to BTP](#part-1-deploying-a-basic-website-to-btp)
- [Part 2: Deploying a Microservice with Cloud Functions](#part-2-deploying-a-microservice-with-cloud-functions)
- [Part 3: Deploying the Mashup-Sample Website](#part-3-deploying-the-mashup-sample-website)
- [Additional Resources](#additional-resources)
- [Contact](#contact)

## Part 1: Deploying a Basic Website to BTP

### Steps:

1. **Create a BTP Trial Account:**
Create your own BTP Trial, wait a bit and login.

2. **Prepare Your Local Environment:**
- Create a new folder named “btp extensions” on your computer and save the provided ZIP file there.

3. **Unpack the ZIP File:**
- Unpack the ZIP file in your folder.

4. **Edit Manifest File:**
- Open the folder “btp-website” and edit the “manifest.yaml” file with your initials, e.g., `"- name: my-web-page-JL"`.

5. **Install Cloud Foundry CLI:**
- Download and install the Cloud Foundry Command Line Tool suitable for your OS.

6. **Command Line Setup:**
- Open the command line (cmd for Windows or terminal for Mac) and navigate to the folder using `cd`.

7. **Deploy to BTP:**
- Login using `cf login`, provide the necessary details, and deploy your site using `cf push`.

8. **Create AI-Generated Content:**
- Use an AI platform to create a website and replace the HTML content of your site.

9. **Deploy Updated Website:**
- Execute `cf push` again to update your website on BTP.

## Part 2: Deploying a Microservice with Cloud Functions

Now that you know how to deploy applications to the BTP Cloud Foundry environment, follow these steps to create microservices:

1. **Edit Your Manifest File:**
- Open the "btp-microservice" folder and edit the "manifest.yaml" file with your initials.

2. **Deploy Microservice:**
- Use `cd` to navigate to the folder and deploy with `cf push`.

3. **Configure in Sales & Service Cloud:**
- Follow live instructions or refer to additional tutorials for custom business logic and key metrics setup.

## Part 3: Deploying the Mashup-Sample Website

1. **Prepare and Deploy:**
- Open the folder “btp-mashup-sample” and deploy using `cf push`.

2. **Configure Mashup:**
- Embed the resulting URL and configure mashup parameters.

3. **Binding Parameters:**
- Bind system and object variables in the mashup configuration.

## Additional Resources

- For building a full CAP application, refer to this [tutorial](https://github.com/SAP-samples/sales-and-service-cloud-extensions/tree/main/CustomServiceBasicCAPSample).

## Contact

Cheers, Jens
