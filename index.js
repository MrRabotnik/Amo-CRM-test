const body = {
    client_id: "2176a88b-e88d-45df-acb2-baa8c6486101",
    client_secret: "D4IDJPfeEZV29xfN749YWy9mblKETdIdPbpGJZtRDGl8A7KizhYw2BcKYN2ZLrdB",
    grant_type: "authorization_code",
    code: "def50200aed4d293c893d531ea03902bb33539c5253081b6a6f10ab85a9bc64227f7fc810c76e51fcf5abc4b4844fe3b081010409bfcef17c71e2f77adb9aa4ce8bad5705f5bed178807ddb4ca5bfaff18eec7589a4a8498d3114513b900217af059c424a65026226418e2a080ef77e61d4a38578f2d60f49e18b47448c0b50e22f27de95bbab5d53c822653bfe303a7e2d37946b5e9682973c8af0b750883fae82aaa1573537736b6778577af4c8df3984d30ceeaf37e47eedfdc5fb00469ca9107a36c9e4e83ad5b106683a491f951a1b1f815815985b2c6d339dd3d9c55548797beed9edc10f5b8ab048e5a1c52fa18fcabfbb7dab93ec7fc68e11e810b98af34a116ef4993ba8b0c1d24ec4277903d021857dfa4c49d5588c83fab6f27971e2ab21e8a32e8246200572c69db3dde6ed4e4d83ba8dd3d29b2414f97ac09032293aae4fbd3fbee962c48aecb37e0e4dc7bb1e5e76cda145203d05354d14d90248ce3b6cca75f449824ce8888bc73475e37e69b4dc84f2ef0236a842ad63ce2041e19823c8af4e8103595b494ec84046e26ec3c7707dea613b0adcfc2f9993996754c91f80c4dde2f6049602fe0464e3163b8525182d29c5724af96bf0d00fe065708a85d8a6a2ab8242c16c48a20aab30d66860fdcf1035c9b3baf05bcf815aa29",
    redirect_uri: "https://test.am/",
};

axios
    .post("https://cors-anywhere.herokuapp.com/https://subdomain.amocrm.ru/oauth2/access_token", body)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err.message);
    });
