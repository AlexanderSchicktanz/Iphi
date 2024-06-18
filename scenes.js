class Module{
    enter;
    leave;
    name;
    constructor(name, enter, leave){
        this.enter = enter;
        this.leave = leave;
    }

    enterModule(){
        this.enter();
    }

    leaveModule(){
        this.leave();
    }
}
class Modules{
    static Modules = [];
    static current = 0;
    static addModule(Module){
        this.Modules.push(Module);
    }
    static addModule(name, enter, leave){
        this.Modules.push(new Module(name, enter, leave));
    }

    static getModule(name){
        return this.Modules.find(Module => Module.name === name);
    }
    static nextModule(){
        this.Modules[this.current].leaveModule();
        this.current = (this.current + 1) % this.Modules.length;
        this.Modules[this.current].enterModule();
    }
    static start(){
        this.current = 0;
        this.Modules[this.current].enterModule();
    }
}
Modules.addModule("Außen",
    ()=>{
        
}, ()=>{

});