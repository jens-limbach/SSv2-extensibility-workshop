# BTP Frontend Application Development

Welcome to your first journey in creating BTP frontend applications as a professional code developer! This guide will provide step-by-step instructions accompanied by live sessions, allowing you to become proficient in V2 development. After completing these steps, you’ll be able to develop:

- Basic applications embedded via mashup and generated with AI
- Microservices with small cloud functions with custom business logic
- Microservices with small cloud functions to extend the customer 360 with third-party data

This is really a beginners training to provide you with the very fundamentals. There is no rocket science here. :)

## Table of Contents

- [Part 1: Deploying a Basic Website to BTP](#part-1-deploying-a-basic-website-to-btp)
- [Part 2: Deploying a Microservice with Cloud Functions](#part-2-deploying-a-microservice-with-cloud-functions)
- [Part 3: Deploying the Mashup-Sample Website](#part-3-deploying-the-mashup-sample-website)
- [Additional Resources](#additional-resources)
- [Contact](#contact)

## Part 1: Deploying a Basic Website to BTP

Before you start: My advise is to right-click and open all links below in a new tab so that you do not navigate away from the documentation. ;)

### Steps:

1. **Create a BTP Trial Account:**
- Create your own <a href="https://account.hanatrial.ondemand.com/" target="_blank">BTP Trial</a>, wait a bit and login.

2. **Prepare Your Local Environment:**
- Create a new folder named “btp extensions” on your computer and save the provided [ZIP file](https://github.com/jens-limbach/SSv2-extensibility-workshop/blob/c7aba46ded43a51dd40b309baa632e2c3498c40e/btp-extension-training.zip) here.
  
3. **Unpack the ZIP File:**
- Unpack the ZIP file in your folder.

4. **Edit Manifest File:**
- Open the folder “btp-website” and edit the “manifest.yaml” file with your initials, e.g., `"- name: my-web-page-JL"`.

5. **Install Cloud Foundry CLI:**
- Download and install the Cloud Foundry Command Line Tool suitable for your OS.
- Mac OS X 64 bit: [intel cpu](https://packages.cloudfoundry.org/stable?release=macosx64&version=v8&source=githubIntel) | [arm cpu](https://packages.cloudfoundry.org/stable?release=macosarm&version=v8&source=github) 
- Windows 64 bit: [zip](https://packages.cloudfoundry.org/stable?release=windows64&version=v8&source=github)

6. **Command Line Setup:**
- Open the command line (cmd for Windows or terminal for Mac) and navigate to the folder using `cd`.
- i.e.: `cd C:\btp extensions\btp-website`

7. **Deploy to BTP:**
- Login using `cf login`, provide the necessary details (see below), and deploy your site using `cf push`.
- The api endpoint you find in your btp sub-account in the overview under "Cloud Foundry", e-mail and password are the credentials you use for your btp trial (for SAP users, it is the SAP-All).

8. **Test your first web site on BTP**
- After 'cf push' is finished, you will get a link and if you copy this into the browser you see your very first web-site deployed to BTP! This you could now already embedd as a mashup in SSv2.

9. **Create AI-Generated Content:**
- Use any LLM AI platform to create a website and replace the HTML content of your site.
- i.e.: You can just prompt something like:
  >Create a website that shows a sample SWOT analysis for a large company from an account managers perspective. Also add a list of goals to be achieved with this account in the future. Add matching Unicode icons to the different goals."

19. **Deploy Updated Website:**
- Execute `cf push` again to update your website on BTP. Then test again with the provided link.

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
