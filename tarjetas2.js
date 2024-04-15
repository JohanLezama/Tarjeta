export class Tarjeta{
    col='';
    nombre='';
    url='';
    constructor(c,n,u){
        this.col=c;
        this.nombre=n;
        this.url=u;
    }
    async mostrar(){
        const info = await getDetalle(this.url);
        const img = info[0];
        const id = info[1];
        let habilidades='';
        let Tipos='';
        let Altura='';
        const habis = info[2];
        habis.forEach(hab => {
            habilidades += hab.ability.name+'';
         });
         const Tip = info[3];
        Tip.forEach(tipo =>{
            Tipos += tipo.type.name+'';
        });
        const height = info[4];
        const weight = info[5];
        
        let card='<div class="col-md-'+this.col+'mb-3">';
        card += '<div class="card shadow border-danger">';
        card += '<img src="'+img+'" height="120" class="card-img-top p-2">';
        card += ' <div class="card-body text-center">';
        card += ' <h5 class="card-title text-capitalize">';
        card += '<span class="badge bg-warning text-dark">'+id+'</span>  '
        card += this.nombre+'</h5>';
        card += ' <p class="card-text">Habilidades: <b>'+habilidades+'</b>';
        card +=  ' <p class="card-text">Tipos:<b>'+Tipos+'</b>';
        card +=  ' <p class="card-text">Altura:<b>'+height/10+'</b>Peso:<b>'+weight/10+'</b></div>';
        
        card += '</div></div></div>';
        return card;
    }
}
const getDetalle = async(liga) =>{
    let detalles = [];
    const peticion = await fetch(liga);
    if(peticion.ok){
        const info = await peticion.json();
       detalles.push(info.sprites.other.dream_world.front_default);
       detalles.push(info.id); 
       detalles.push(info.abilities);
       detalles.push(info.types);
       detalles.push(info.height);
       detalles.push(info.weight);
       return detalles;
    }
}