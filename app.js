'use strict';
var Storelocations =[];
var hours = ['','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var storeTable = document.getElementById('store');
var Storeform = document.getElementById('location')
var thead =document.getElementsByTagName('thead')[0];
var tfoot =document.getElementsByTagName('tfoot')[0];
var tbody =document.getElementsByTagName('tbody')[0];
var trEl =document.getElementById('tr');

function Store(location,minCustomer,maxCustomer,avgCookieSales) {
    this.locationName = location;
    this.minCustomerPerhour = minCustomer;
    this.maxCustomerPerhour =maxCustomer;
    this.avgCookieSales =avgCookieSales;
    this.hourlySales =[];
    this.totalSales =0;
    this.getsales();
    Store.location.push(this);
}


    function randomCust(){
       return Math.floor(Math.random() * (maxCustomer- minCustomer +1 )) + minCustomer;
        return randomNumber;
    }
    Store.prototype.getsales=function(){
        for(var i = 0; i < hours.length; i++){
            var Customers =random(
                this.minCustomerPerhr,
                this.maxCustomerPerhr,
            );
            var hourlycount = Math.floor(Customers * this.avgCookieSales);
            this.cookiesperhr.push(this.avgCookieSales);
        }
    };
    Store.prototype.render = function() {
        var trelement = document.createElement('tr');
        var tdelement =document.createElement('td');

        tdelement.textContent =this.location;
        trelement.appendChild(tdelement);
        for(var i=0;i< businessHours.length;i++) {
        tdelement =document.createElement('td');
        tdelement.textContent =this.avgCookieSales[i];
        trelement.appendChild(tdelement);
        }
         tdelement =document.createElement('td');
        tdelement.textContent =this.maxCustomer;
        trelement.appendChild(tdelement);

        var tdelement =document.createElement('td');
        tdelement.textContent =this.avgCookieSales;
        trelement.appendChild(tdelement);


        storeTable.appendChild(trelement);

    };

            


            function Headerow(){
               var headerTrElement = document.createElement('tr');
                var thElement = document.createElement('th');
                tdelement.textContent ='salmon cookie';
                headerTrElement.appendChild(thElement);
                }
                storeTable.appendChild(trEl);

                var firstNpike =new store('FirstNpike',22,65,6.3);
                var Seatac =new store('Seatac',3, 24, 1.2);
                var SeattleCenter =new store('SeattleCenter',11, 38, 3.7);
                var CapitolHill =new store('CapitolHill',20, 38, 2.3);
                var Alki = new store ('Alki',2, 16, 4.6);





    function renderStores() {
        for(var i of allstores) {
            stores.render();
            stores.getsales();

        }
    }

    function newStore(event) {
        var newlocation =event.target.location.value;
        var minCustomer =event.target.minCustomer.value;
        var maxCustomer =event.maxCustomer.value;
        var avgCookieSales =event.avgCookieSales.value;

        new store(newlocation,newmincustomer,newmaxcustomer,newavgsales);
        storeTable.innerHTML='';
        Headerow();
        renderStores();
    }
    


    function renderFooter() {
        tfoot.innerHTML = '';
        var tr = addElement('tr','',tfoot);
        addElement('th','hourlytotal',tr);
    }
     

        
    

     function handle(event) {
         var location =event.target.location.value;
         var min =ParseInt(event.target.min);
         var max =ParseInt(event.target.max);
         var avg =ParseInt(event.target.avg);

         var newStore =new(location,min,max,avg);

         storeTable.innerHTML ='';
         Headerow();
         renderStores();
         
     }
        Storeform.addEventlistener('submit',AddNewStore);
        
    
        Headerow();
        renderStores();
        
console.log(Storelocations);