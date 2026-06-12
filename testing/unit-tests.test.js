import cdk from "aws-cdk-lib/core";
import { Template } from "aws-cdk-lib/assertions";
const BakehouseStack = require("../lib/bakehouse-stack")

// const cdk = require('aws-cdk-lib/core');
// const { Template } = require('aws-cdk-lib/assertions');
// const WillRobinsonBakehouseS3 = require('../lib/will-robinson-bakehouse-s3-stack');

// example test. To run these tests, uncomment this file along with the
// example resource in lib/will-robinson-bakehouse-s3-stack.js
//   const app = new cdk.App();
//   // WHEN
//   const stack = new WillRobinsonBakehouseS3.WillRobinsonBakehouseS3Stack(app, 'MyTestStack');
//   // THEN
//   const template = Template.fromStack(stack);

//   template.hasResourceProperties('AWS::SQS::Queue', {
//     VisibilityTimeout: 300
//   });


test('creates S3 buckets', () => {
    const app = new cdk.App();
    const stack = new BakehouseStack(app, 'TestStack');

    const template = Template.fromStack(stack);

    const expected = 2;

    template.resourceCountIs('AWS::S3::Bucket', expected)

})
