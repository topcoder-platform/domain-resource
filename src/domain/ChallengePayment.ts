/*
  ( resource_id,
    amount,
    project_payment_type_id,
    create_user,
    modify_user,
    create_date, 
    modify_date, 
    project_payment_id
  )
  */

import { relationalClient } from "../dal/client/relational";
import {
  InsertQuery,
  QueryRequest,
  QueryResponse,
  Value,
} from "../dal/models/rdb/SQL";

class ChallengePaymentDomain {
  constructor(private tableName: string = "project_payment") {}

  public async createPayment(
    resourceId: number,
    amount: number,
    paymentType: number
  ) {
    const insertQuery: InsertQuery = {
      table: this.tableName,
      columnValue: [
        {
          column: "resource_id",
          value: this.getIntValue(resourceId),
        },
        {
          column: "amount",
          value: this.getDoubleValue(amount),
        },
        {
          column: "project_payment_type_id",
          value: this.getIntValue(paymentType),
        },
        {
          column: "create_user",
          value: this.getIntValue(88774588),
        },
        {
          column: "modify_user",
          value: this.getIntValue(88774588),
        },
        {
          column: "create_date",
          value: {
            value: {
              $case: "dateValue",
              dateValue: "CURRENT",
            },
          },
        },
        {
          column: "modify_date",
          value: {
            value: {
              $case: "dateValue",
              dateValue: "CURRENT",
            },
          },
        },
      ],
      idColumn: "project_payment_id",
      idSequence: "MAX",
      idTable: this.tableName,
    };

    const queryRequest: QueryRequest = {
      query: {
        query: {
          $case: "insert",
          insert: insertQuery,
        },
      },
    };

    const queryResponse: QueryResponse = await relationalClient.query(
      queryRequest
    );
    console.log("queryResponse", queryResponse);
  }

  private getDoubleValue(value: number): Value {
    return {
      value: {
        $case: "doubleValue",
        doubleValue: value,
      },
    };
  }

  private getIntValue(value: number): Value {
    return {
      value: {
        $case: "intValue",
        intValue: value,
      },
    };
  }
}

export default new ChallengePaymentDomain();
