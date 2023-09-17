const {connection} = require('../db');


const query1 = async(req, res) => {
    const startdate = req.body.startdate;
    const enddate = req.body.enddate;
    const msisdn = req.body.msisdn;
    const imsi = req.body.imsi;

    const params = [startdate, enddate]

    console.log(req.body)

    let sqlQuery = "SELECT * FROM call_detail_records ";

    if (startdate&&enddate) {
        console.log("1111");

        sqlQuery += "WHERE RECORD_DATE BETWEEN ? AND ? ";
        console.log(sqlQuery);
    } 

    if(startdate&&enddate&&msisdn) {
        console.log("bebelino");

        if (sqlQuery.includes("WHERE")) {
            sqlQuery += " AND";
        } else {
            sqlQuery += "WHERE";
        }

        sqlQuery += " MSISDN = ?";

        params.push(msisdn);

        console.log(sqlQuery);
    } 

    if (startdate&&enddate&&imsi) {
        console.log("dickson");

        console.log(sqlQuery);

        if (sqlQuery.includes("WHERE")) {
            sqlQuery += " AND";
        } else {
            sqlQuery += " WHERE";
        }

        sqlQuery += " IMSI = ?";

        params.push(imsi);

        console.log(sqlQuery);
    }
    
    connection.query(sqlQuery,params, function(err, results) {
        if (err) {
            return res.status(400).json({msg:"Error fetching the data"});
        } else {
            return res.status(200).json({results});
        }
    });
}


module.exports = {query1}