import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
  let discos = [
    {id:1, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "Appetite for Destruction",
        año: "1987",
        stock:5,
        portada: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/05/21/16215957812310.jpg',
        available: true,
        precio: 150,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    },
    {id:2, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "G N' R Lies",
        año: "1988",
        stock:5,
        portada: 'https://ladobmusica.com.ar/pub/media/catalog/product/cache/2c246b008315a461dd64781fe12af0bd/6/_/6_3_00241982.jpg',
        available: true,
        precio: 260,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:3, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "Use Your Illusion I",
        año: "1991",
        stock:7,
        portada: 'https://upload.wikimedia.org/wikipedia/en/e/ea/GnR--UseYourIllusion1.jpg',
        available: true,
        precio: 250,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:4, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "Use Your Illusion II",
        año: "1991",
        stock:16,
        portada:'https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973',
        available: true,
        precio: 180,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:5, 
        genero: "pop",
        banda: "U2", 
        titulo: "The Joshua Tree",
        año: "1987",
        stock:16,
        portada:'https://upload.wikimedia.org/wikipedia/en/6/6b/The_Joshua_Tree.png',
        available: true,
        precio: 200,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:7, 
        genero: "pop",
        banda: "U2", 
        titulo: "All That You Can't Leave Behind",
        año: "2000",
        stock:25,
        portada:'https://upload.wikimedia.org/wikipedia/en/5/5b/U2-all-that-you-cant-leave-behind.jpg',
        available: true,
        precio: 1500,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:8, 
        genero: "cumbia",
        banda: "La Nueva Luna", 
        titulo: "Difusión: La Nueva Luna",
        año: "1995",
        stock:3,
        portada:'https://christianmanzanelli.com/wp-content/uploads/2012/04/la_nueva_luna_christian_manzanelli_representante_artistico_contratar_sitio_oficial_la_nueva_luna-3.jpg',
        available: true,
        precio:200,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:8, 
        genero: "cumbia",
        banda: "La Nueva Luna", 
        titulo: "La Nueva Luna en el Gran Rex",
        año: "2009",
        stock:1,
        portada:'https://http2.mlstatic.com/D_NQ_NP_245225-MLA25412607221_032017-O.webp',
        available: true,
        precio: 250,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    
    ];
 
    const getDiscos = ()=>{
        return new Promise((resolve, reject)=>{
            if(discos.length===0){
                reject(new error(("no hay discos para mostrar"))               
                );

            }
            resolve(discos)
        })
    }

    async function fetchingDiscos(){
        try{
            const discosfetch = await getDiscos();
            console.log(discosfetch)
        }catch(err){
            console.log(err);
        }
    }
    fetchingDiscos();
  
  return (
    <>
      <ItemList discos={discos}/>
      <h2>{greeting}</h2>
    </>
  );
}

export default ItemListContainer;


