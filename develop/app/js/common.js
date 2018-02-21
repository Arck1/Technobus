//Константы и глобальные переменные
//
const days = ['monday', 'tuesday', 'tednesday', 'thursday', 'friday', 'saturday','sunday'];
const fullDays = ['fullMonday', 'fullTuesday', 'fullTednesday', 'fullThursday', 'fullFriday', 'fullSaturday','fullSunday'];
const inWeekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу']

var currentTableId = 0;
var currentWindow = 1;
var googleSpreadsheet;
var tableViewer;
var apiObj;
var  infoList = [];
var sortedTimeLists = { 'to' : [], 'from' : []};
var notificationNumber = 0;

var isLoadedMaps = false;

//Параметр для включения геолокации
const isGeoLocationOn = true;


const key = "AIzaSyAl9aZAZCbOAYhUl0RH57S9cnAPMnG3LLs";
const spreadsheetId = "10db0NtOmOC5TLw0WBuzFCGtoVa1GaFYDeUqIADh6p1E";

//Параметры для запросов
const ToTecnopolis = "To Technopolis";
const rangeTo = "A:H";

const FromTechnopolis = "From Technopolis";
const rangeFrom = "A:H";

const Info = "Info";
const InfoRange = "A:B";

//global application time
function getCurrentTime() {
    let now = new Date();
    // now.setHours(12);
    // now.setMinutes(22);
    return now;
}


    