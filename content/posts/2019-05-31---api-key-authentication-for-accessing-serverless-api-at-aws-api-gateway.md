---
title: Api Key Authentication for Accessing Serverless API at AWS API Gateway
date: "2019-05-31T00:55:28.907Z"
template: "post"
draft: false
slug: "/posts/api-key-authentication-for-accessing-serverless-api-at-aws-api-gateway"
category: "Node.js"
tags:
  - "node.js"
  - "serverless"
  - "lambda"
  - "aws"

description: "Any REST API should set up some or the other authentication mechanism to secure from unintended uses. The AWS console and Serverless configuration provides a very easy way to secure the API endpoints by setting up the API keys"
---

Any REST API should set up some or the other authentication mechanism to secure from unintended uses. The AWS console and Serverless configuration provide an easy way to secure the API endpoints by setting up the API keys.

## First, make the endpoints private

Set `private: true` in the `http` section of individual functions as follow.

```yml
functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get
          private: true
```

## List the API key names in serverless.yml

We can list the API key names in `provider` section of `serverless.yml` as shown below.

```yml
apiKeys:
  - myClientOne
  - myClientTwo
```

The AWS will generate the actual keys for us. The keys will be displayed in the output of `sls deploy` command output.

![specifying only api key names](/media/onlyapikeynames-apikey.png)

## If you explicitly want to specify the API key

You set your own API key value by specifying `value` property as below. It should be a string with a minimum length of 20. Optionally you can also provide a description to the value.

```yml
apiKeys:
  - myClientOne
  - myClientTwo
  - value: myClientThirdValueOfMinLength20
    description: This is explicitly provided api key
```

If deploy the changes by running `sls deploy` the AWS will auto-generate the name of the api key and set the provided value

![explicitly assigned value](/media/explicit-value-api-key.png)

The below example will set both name and value explicitly

```yml
apiKeys:
  - name: myClientFour
    value: myClientFourValueOfR@n0mStr1n6
```

## Append the stage to the API key name

The API keys are stored globally so it is advisable to append the stage name with API key name if clients allowed to access the multiple stages.

```yml
apiKeys:
  - ${self:provider.stage}-myClientFive
```

![specify stage in api key name](/media/specify-stage-to-api-key-name.png)

The same way if you want to use the environment variable you can od it by `${self:provider.environment.YOUR_ENV_VARIABLE}`

> Each time we make any change in `serverless.yml`, we should deploy using `sls deploy` to have its effect on AWS.

> PRO Tip: You can use `sls print` command to review the compiled yaml configuration file before running `sls deploy`

## Set quota limits

We can set the quota limits to the API as follow

```yml
provider:
  ...
  usagePlan:
    quota:
      limit: 5000
      offset: 2
      period: MONTH
    throttle:
      burstLimit: 200
      rateLimit: 100
```

We can even categorize the quota, for example, _free_ and _paid_. We should assign the api keys to the respective categories.

```yml
apiKeys:
  - free:
      - myClientOne
      - myClientTwo
  - paid:
      - value: myClientThirdValueOfMinLength20
        description: This is explicitly provided api key
      - ${self:provider.stage}-myClientFive

usagePlan:
  - free:
      quota:
        limit: 5000
        offset: 2
        period: MONTH
      throttle:
        burstLimit: 200
        rateLimit: 100
  - paid:
      quota:
        limit: 50000
        offset: 1
        period: MONTH
      throttle:
        burstLimit: 2000
        rateLimit: 1000
```

All the configuration we did here can be seen at [API Gateway service of AWS Console](https://console.aws.amazon.com/apigateway/home?region=us-east-1)

I hope you find the same helpful.

Reference: https://serverless.com/framework/docs/providers/aws/events/apigateway/#setting-api-keys-for-your-rest-api
