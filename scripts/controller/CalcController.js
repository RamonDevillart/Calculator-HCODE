class CalcController {

    constructor(){

        this._operation = [];
        this._locale = ('pt-BR');
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){          

        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);
       
    }

    addEventListenerAll(elem, events, func){

        events.split(' ').forEach(event => {

            elem.addEventListener(event , func, false);
        });
    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop();
    }


    addOperation(value){
        this._operation.push(value);
        console.log(this._operation)
    }

    execBtn(value){

        switch (value){

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'sum':
            
                break;

            case 'minus':
            
                break;

            case 'dividedBy':
            
                break;

            case 'times':
            
                break;

            case 'dot':
            
                break;

            case 'percent':
            
                break;

            case 'equals':
            
                break; 
                
            case '0':    
            case '1':    
            case '2':    
            case '3':    
            case '4':    
            case '5':    
            case '6':    
            case '7':    
            case '8':    
            case '9': 
                this.addOperation(parseInt(value));
                break;

        }
    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");

       buttons.forEach((btn, index) =>{

        this.addEventListenerAll(btn, 'click drag', e=>{

            let btnText = btn.className.baseVal.replace('btn-', '');

            this.execBtn(btnText);

           });

           this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e =>{

            btn.style.cursor = "pointer";

           })

       });

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get  displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentdate.innerHTML = value;
    }
}