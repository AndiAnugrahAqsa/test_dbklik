const axios = require("axios")
const cheerio = require('cheerio');
const { appendFileSync, unlink } = require('fs')

const exportToCSV = (no, code, kabupaten, provinsi, ibuKota, kecamatan, kelurahan) => {
    const csv = `${no},${code},${kabupaten},${provinsi},${ibuKota},${kecamatan},${kelurahan}`;
    try {
        appendFileSync("./kabupaten.csv", csv);
    } catch (error) {
        console.log(error);
    }
};

async function createCSV (){
    unlink("./kabupaten.csv", err=>{})
    const response = await axios.get("https://id.wikipedia.org/wiki/Daftar_kabupaten_di_Indonesia")

    const html = response.data
    const $ = cheerio.load(html)
    

    let isForHeader = true
    $("table.wikitable > tbody > tr").each((i, element) => {
        if (isForHeader) {
            exportToCSV(
                $(element).find('th:nth-child(1)').text().replace("\n", ""),
                $(element).find('th:nth-child(2)').text().replace("\n", ""),
                $(element).find('th:nth-child(3)').text().replace("\n", ""),
                $(element).find('th:nth-child(4)').text().replace("\n", ""),
                $(element).find('th:nth-child(5)').text().replace("\n", ""),
                $(element).find('th:nth-child(6)').text().replace("\n", ""),
                $(element).find('th:nth-child(7)').text(),
            )
            isForHeader = false
        }else{
            exportToCSV(
                $(element).find('td:nth-child(1)').text().replace("\n", ""),
                $(element).find('td:nth-child(2)').text().replace("\n", ""),
                $(element).find('td:nth-child(3)').text().replace("\n", ""),
                $(element).find('td:nth-child(4)').text().replace("\n", ""),
                $(element).find('td:nth-child(5)').text().replace("\n", "").replace(",", ""),
                $(element).find('td:nth-child(6)').text().replace("\n", ""),
                $(element).find('td:nth-child(7)').text(),
            )
        }
    })
}

createCSV()