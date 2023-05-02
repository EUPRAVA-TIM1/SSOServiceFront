export default {
    allServices: [
        {
            name: "Saobraćajna policija",
            description: "Proverite svoja kažnjavanja,prijavite krađu vozila, proverite lokacije policijskih uprava i još mnogo pogodnosti vas čeka na portalu e-saobraćajna policija",
            url: "http://localhost:3001/redirekcija",
            cardColor: "info"
        },
        {
            name: "Sud",
            description: "Proverite svoja ročišta,presude i ostale informacija i još mnogo pogodnosti vas čeka na portalu e-sud",
            url: "http://localhost:3002/redirekcija",
            cardColor: "success"
        },
        {
            name: "MUP",
            description: "Registrujte svoje vozilo, izradite vozačku dozvolu obnovite dokumenta i još mnogo toga možete uraditi na poratalu e-mup",
            url: "http://localhost:3003/redirekcija",
            cardColor: "danger"
        }
    ],
    ssoServiceUrl: "http://localhost:8000/sso/"
}