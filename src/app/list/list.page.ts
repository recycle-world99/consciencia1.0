import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})



export class ListPage implements OnInit {
  private selectedItem: any;

  prods = [
    {
      titulo: 'Plásticos',valor: '- Pontos por (Kg)', url: '',
      
      subProds: [
        {titulo: 'Pet Cristal e Azul',valor: 'PTS: 1.300', url: 'cristal-pet.jpg'},
        {titulo: 'Pet Verde',valor: 'PTS: 1.300', url: 'pet-verde.jpg'},
        {titulo: 'Pead Branco e Natural',valor: 'PTS: 1.100', url: 'pead-branco.jpg' },
        {titulo: 'PS',valor: 'PTS: 800', url: 'copo-ps.jpg'},
        {titulo: 'Pet Colorido',valor: 'PTS: 800', url: 'pet-colorido.jpg'},
        {titulo: 'ABS',valor: 'PTS: 800', url: 'abs-plastico.jpg'},
        {titulo: 'PEBD Branco',valor: 'PTS: 800', url: 'pebd-branco.jpg'},
        {titulo: 'PEBD Colorido',valor: 'PTS: ', url: 'pebd-colorido.jpg'},
        {titulo: 'Pet Óleo de Cozinha',valor: 'PTS: 650', url: 'pet-óleo.jpg'},
        {titulo: 'PEAD Colorido',valor: 'PTS: 600', url: 'pead-colorido600.jpg'},
        {titulo: 'BOPP(Saco de Salgadinho)',valor: 'PTS: 600', url: 'bopp-salgadinho.jpg'},
        {titulo: 'PP Colorido',valor: 'PTS: 500', url: 'pp-colorido500.jpg'},
        {titulo: 'PP Cristal',valor: 'PTS: 500', url: 'pp-cristal500.jpg'},
        {titulo: 'Plastico Filme(Sacolas Plásticas)',valor: 'PTS: 400', url: 'plastico-filme400.jpg'},
        {titulo: 'Pet Branco (Leite)',valor: 'PTS: 400', url: 'pet-branco400.jpg'},
        {titulo: 'XPS(Isopor Bandejão)',valor: 'PTS: 400', url: 'xps-isopor400.jpg'},
        {titulo: 'PE',valor: 'PTS: 300', url: 'pe-plastico300.jpg'},
        {titulo: 'EPS(Isopor Bolinha)',valor: 'PTS: 400', url: 'eps-isopor400.jpg'},
      ]
    },
    
    {
      titulo: 'Celulose',valor: '- Pontos por (Kg)', url: '',

      subProds: [
        {titulo: 'Papel Branco',valor: 'PTS: 300', url: 'papel-branco.jpg'},
        {titulo: 'Papelão',valor: 'PTS: 250', url: 'papelão.jpg'},
        {titulo: 'Papel Misto',valor: 'PTS: 50', url: 'papel-misto.jpg'},
        {titulo: 'Papel Cartão',valor: 'PTS: 250', url: 'papelcartão.jpg'},
      ]
    },

    { titulo: 'Vidro',valor: '- Pontos por (Kg)', url: '',

      subProds:[
        {titulo: 'Vidro',valor: 'PTS: 40', url: 'vidro.jpg',},
      ]

    },
    { titulo: 'Metais',valor: '- Pontos por (Kg)', url: '',

    subProds:[
      {titulo: 'Alumínio(Outros)',valor: 'PTS: 2.800', url: 'outros.jpg',},
      {titulo: 'Cobre',valor: 'PTS: 7.800', url: 'cobre.jpg'},
      {titulo: 'Lata de Alumínio',valor: 'PTS: 3.800', url: 'aluminio-lata3800.jpg'},
      {titulo: 'Aerossol Alumínio',valor: 'PTS: 2.300', url: 'aerosol-aluminio2300.jpg'},
      {titulo: 'Aerosol Aço',valor: 'PTS: 300', url: 'aerosol-aço300.jpg'},
      {titulo: 'Ferrosos',valor: 'PTS: 300', url: 'ferrosos300.jpg'},
    ]

    },
    { titulo: 'Materiais Organicos',valor:'- Pontos por (Kg)', url: '',

    subProds:[
      {titulo: 'Materias Orgânicos',valor: 'PTS: ', url: 'lixoorganico.jpg',},
      ]
    },
    {
      titulo: 'Outros',valor: '- Pontos por (Kg)', url: '',
      
      subProds: [
        { titulo: 'Eletrônicos e Eletrodomésticos',valor: 'PTS: 1.000', url: 'eletronicos-eletrodomesticos1000.jpg'},
        { titulo: 'Emb.Longa Vida',valor: 'PTS: 1.000', url: 'embalagem-longavida1000.jpg'},
        { titulo: 'Pilha e Baterias',valor: 'PTS: 300', url: 'pilhas-baterias300.jpg'},
        { titulo: 'Óleo de Cozinha',valor: 'PTS: 250', url: 'oleo-cozinha250.jpg'},
      ]
    }
    ];

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}