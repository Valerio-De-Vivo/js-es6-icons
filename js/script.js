$(document).ready(function(){
    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        }
      ];


    const colori = ['blue', 'orange', 'purple'];

    //.creo l array dei tre tipi
    const iconType = [];

    icons.forEach((element) => {
        if (!iconType.includes(element.type)) {
            iconType.push(element.type)
        }
    })

    //.mappo icon e aggiungo il colore in base al tipo

    const iconColor = icons.map((element) => {
        const indice = iconType.indexOf(element.type);

        return {
            ...element,
            colore: colori[indice],
        }
    })

    //.stampo le icone

    iconColor.forEach((element) => {
        const container = $('.container');

        const {name,family,prefix,type, colore} = element;

        container.append(`
        <div class="box-icon">
            <i class="${family} ${prefix}${name}" style="color:${colore}"></i>
            ${name}
        </div>
        `)
    })
    
    //.aggiungo le option nelle select

    const selectValue = $('select');
    
    iconType.forEach((element) => {
        selectValue.append(`
        <option value="${element}">${element}</option>
        `)
    })

    //..funzione filtro

    selectValue.change(function(){
        const valu = selectValue.val();

        const filtered = iconColor.filter((element) => {

            if (valu == 'all') {
                return element
            }
            return element.type == valu
        })
        const container = $('.container');
        container.empty();

        filtered.forEach((element) => {
        
            const {name,family,prefix,type, colore} = element;
            
                container.append(`
                <div class="box-icon">
                    <i class="${family} ${prefix}${name}"      style="color:${colore}"></i>
                    ${name}
                </div>
            `)
            }
        )
        
    });

















});