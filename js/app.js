(function(){
    var app = angular.module('rdsFormApp', []);
    
    app.controller('RdsInboxController', function(){
        this.ins = requests;
    });
    
    app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
    app.controller('FormController', function(){
        this.form = {};
        this.addRds = function(formAdd){
        formAdd.requests.push(this.form);
        this.form = {};
    };
    });
    
    var requests = [ 
    {companyName: 'Sage Plc', accountNo: 66455641,incident: '310816-DF76D',program: 'Sage 50 Accounts',},
    {companyName: 'Toys R Us', accountNo: 44721455,incident: '220816-DDKK8',program: 'Sage 50 Payroll',},
    {companyName: 'McDonalds', accountNo: 45872144,incident: '290816-48AA2',program: 'Sage 50 Accounts',},
    {companyName: 'Burger King', accountNo: 87546698,incident: '140816-7A4AA',program: 'Sage 50 Payroll',},
    {companyName: 'Cintra', accountNo: 68412547,incident: '010916-5A74A',program: 'Sage 50 Accounts',},
    {companyName: 'Bede Gaming', accountNo: 58932145,incident: '020916-ANJ44',program: 'Sage 50 Payroll',},
    {companyName: 'Microsoft', accountNo: 33557156,incident: '020916-847AL',program: 'Sage 50 Accounts',},
    {companyName: 'Apple Inc', accountNo: 99884211,incident: '050916-OOF88',program: 'Sage 50 Accounts',},
    {companyName: 'Jato Dynamics', accountNo: 88420456,incident: '040916-KKJ554',program: 'Sage 50 Accounts',},
    
    ];
})();
