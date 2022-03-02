"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step10AppsyncNoDataSourceStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const appsync = require("@aws-cdk/aws-appsync-alpha");
class Step10AppsyncNoDataSourceStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // appsync api 
        const api = new appsync.GraphqlApi(this, "No_data_source", {
            name: "No_data_sorce",
            schema: appsync.Schema.fromAsset('graphql/schema.gql'),
            logConfig: {
                fieldLogLevel: appsync.FieldLogLevel.ALL
            }
        });
        //output url
        new aws_cdk_lib_1.CfnOutput(this, "Url_endpoint_of_appsync", {
            value: api.graphqlUrl
        });
        //no Data Source
        const dataSource = api.addNoneDataSource("noDataSource", {
            name: "noDataSorce",
            description: "Does not save incoming Data anywhere"
        });
        dataSource.createResolver({
            typeName: "Mutation",
            fieldName: "changeStatus",
            requestMappingTemplate: appsync.MappingTemplate.fromString(`{
        "version" : "2017-02-28",
        "payload": $util.toJson($context.arguments)
        }`),
            responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
        });
    }
}
exports.Step10AppsyncNoDataSourceStack = Step10AppsyncNoDataSourceStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcDEwX2FwcHN5bmNfbm9fZGF0YV9zb3VyY2Utc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGVwMTBfYXBwc3luY19ub19kYXRhX3NvdXJjZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMkQ7QUFFM0Qsc0RBQXFEO0FBRXJELE1BQWEsOEJBQStCLFNBQVEsbUJBQUs7SUFDdkQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixlQUFlO1FBQ2YsTUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUN6RCxJQUFJLEVBQUUsZUFBZTtZQUNyQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7WUFDdEQsU0FBUyxFQUFFO2dCQUNULGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUc7YUFDekM7U0FDRixDQUFDLENBQUE7UUFFRixZQUFZO1FBQ1osSUFBSSx1QkFBUyxDQUFDLElBQUksRUFBRSx5QkFBeUIsRUFBRTtZQUM3QyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVU7U0FDdEIsQ0FBQyxDQUFBO1FBRUYsZ0JBQWdCO1FBQ2hCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUU7WUFDdkQsSUFBSSxFQUFFLGFBQWE7WUFDbkIsV0FBVyxFQUFFLHNDQUFzQztTQUNwRCxDQUFDLENBQUE7UUFFRixVQUFVLENBQUMsY0FBYyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDOzs7VUFHdkQsQ0FBQztZQUNMLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUN6RCwrQkFBK0IsQ0FDaEM7U0FDRixDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0Y7QUFyQ0Qsd0VBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2ZuT3V0cHV0LCBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgYXBwc3luYyBmcm9tICdAYXdzLWNkay9hd3MtYXBwc3luYy1hbHBoYSdcblxuZXhwb3J0IGNsYXNzIFN0ZXAxMEFwcHN5bmNOb0RhdGFTb3VyY2VTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBhcHBzeW5jIGFwaSBcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBwc3luYy5HcmFwaHFsQXBpKHRoaXMsIFwiTm9fZGF0YV9zb3VyY2VcIiwge1xuICAgICAgbmFtZTogXCJOb19kYXRhX3NvcmNlXCIsXG4gICAgICBzY2hlbWE6IGFwcHN5bmMuU2NoZW1hLmZyb21Bc3NldCgnZ3JhcGhxbC9zY2hlbWEuZ3FsJyksXG4gICAgICBsb2dDb25maWc6IHtcbiAgICAgICAgZmllbGRMb2dMZXZlbDogYXBwc3luYy5GaWVsZExvZ0xldmVsLkFMTFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvL291dHB1dCB1cmxcbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsIFwiVXJsX2VuZHBvaW50X29mX2FwcHN5bmNcIiwge1xuICAgICAgdmFsdWU6IGFwaS5ncmFwaHFsVXJsXG4gICAgfSlcblxuICAgIC8vbm8gRGF0YSBTb3VyY2VcbiAgICBjb25zdCBkYXRhU291cmNlID0gYXBpLmFkZE5vbmVEYXRhU291cmNlKFwibm9EYXRhU291cmNlXCIsIHtcbiAgICAgIG5hbWU6IFwibm9EYXRhU29yY2VcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRvZXMgbm90IHNhdmUgaW5jb21pbmcgRGF0YSBhbnl3aGVyZVwiXG4gICAgfSlcblxuICAgIGRhdGFTb3VyY2UuY3JlYXRlUmVzb2x2ZXIoe1xuICAgICAgdHlwZU5hbWU6IFwiTXV0YXRpb25cIixcbiAgICAgIGZpZWxkTmFtZTogXCJjaGFuZ2VTdGF0dXNcIixcbiAgICAgIHJlcXVlc3RNYXBwaW5nVGVtcGxhdGU6IGFwcHN5bmMuTWFwcGluZ1RlbXBsYXRlLmZyb21TdHJpbmcoYHtcbiAgICAgICAgXCJ2ZXJzaW9uXCIgOiBcIjIwMTctMDItMjhcIixcbiAgICAgICAgXCJwYXlsb2FkXCI6ICR1dGlsLnRvSnNvbigkY29udGV4dC5hcmd1bWVudHMpXG4gICAgICAgIH1gKSxcbiAgICAgIHJlc3BvbnNlTWFwcGluZ1RlbXBsYXRlOiBhcHBzeW5jLk1hcHBpbmdUZW1wbGF0ZS5mcm9tU3RyaW5nKFxuICAgICAgICBcIiR1dGlsLnRvSnNvbigkY29udGV4dC5yZXN1bHQpXCJcbiAgICAgICksXG4gICAgfSk7XG5cbiAgfVxufVxuIl19