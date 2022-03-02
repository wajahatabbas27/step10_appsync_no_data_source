import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from '@aws-cdk/aws-appsync-alpha'

export class Step10AppsyncNoDataSourceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // appsync api 
    const api = new appsync.GraphqlApi(this, "No_data_source", {
      name: "No_data_sorce",
      schema: appsync.Schema.fromAsset('graphql/schema.gql'),
      logConfig: {
        fieldLogLevel: appsync.FieldLogLevel.ALL
      }
    })

    //output url
    new CfnOutput(this, "Url_endpoint_of_appsync", {
      value: api.graphqlUrl
    })

    //no Data Source
    const dataSource = api.addNoneDataSource("noDataSource", {
      name: "noDataSorce",
      description: "Does not save incoming Data anywhere"
    })

    dataSource.createResolver({
      typeName: "Mutation",
      fieldName: "changeStatus",
      requestMappingTemplate: appsync.MappingTemplate.fromString(`{
        "version" : "2017-02-28",
        "payload": $util.toJson($context.arguments)
        }`),
      responseMappingTemplate: appsync.MappingTemplate.fromString(
        "$util.toJson($context.result)"
      ),
    });

  }
}
