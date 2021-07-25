const axios = require('axios');

module.exports = {
  comprar: async (req, res) => {
    console.log("request",req.body)
    
      try {
        let cargo = await axios.post(
          "https://api.culqi.com/v2/charges",
          {
            currency_code:"PEN",
            //amount
            //email
            //source_id :token
            ...req.body
          },
          {
            headers:{
              "Content-type":"application/json",
              "Authorization":`Bearer ${process.env.CULQIPRIVATE}`
            }
          }
        )
        console.log("estado peticion",cargo)
      } catch (error) {
        console.log(error)
      }
  },
};
