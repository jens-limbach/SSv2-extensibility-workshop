# HANA Cloud DB - basic steps

These are the basic steps to configure a new hana db for your CAP project. It might be that some are different for you but the most important ones you should find below.

1. Navigate to your instances in BTP and open your Hana Cloud (if you have none you need first to add it to your sub-account)
<img src="images/1OpenHanaCockpit.png">

2. Create a new instance
<img src="images/2CreateNew.png">

3. Configure it manually
<img src="images/3ConfigureManually.png">

4. Set the DB name (this step is very important and the name must match the one given in your CAP project later)
<img src="images/2HanaDBName.png">

5. Allow all IP Addresses and map your Cloud Foundry UUID and Space UUID (if you open your space you can find both in the URL)
<img src="images/4AllowIPMapCloudFoundry.png">

6. Finish the db creation and wait until it is started. Please note that on a trial it is shut down every day.
