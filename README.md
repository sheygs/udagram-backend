# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:

1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
   A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images.

## Installation

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)

> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.

**Deployed URL**: [Image Filter Service URL](http://image-filter-starter-code-dev222222222222222222222.us-east-1.elasticbeanstalk.com/)

### Invalid Image Filter

http://image-filter-starter-code-dev222222222222222222222.us-east-1.elasticbeanstalk.com/filteredimage?image_url=

### Valid Image Filter

http://image-filter-starter-code-dev222222222222222222222.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://tinypng.com/images/social/website.jpg
