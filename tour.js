AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "ironman",
          title: "Iron Man",
          url: "./assets/ironman.jpg",
        },
        {
          id: "scarletwitch",
          title: "Scarlet Witch",
          url: "./assets/scarletwitch.jpg",
        },
        {
          id: "spiderman",
          title: "Spider Man",
          url: "./assets/spiderman.jpg",
        },
        {
          id: "spyxfamily",
          title: "Spy x Family",
          url: "./assets/spyxfamily.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item)
        borderEl.appendChild(thumbNail)
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('id', id)
      entityEl.setAttribute('visible', true)
      entityEl.setAttribute('position', position)
      entityEl.setAttribute('material', {
        color: 'black',
        opacity: 1
      })
      return entityEl
    },
  
    createThumbNail: function (item) {
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('visible', true)
      entityEl.setAttribute('material', {src: item.url})
      entityEl.setAttribute('geometry', {
        primitive: 'plane',
        width: 18,
        height: 25
      })
      return entityEl
    },
  
    createTitleEl: function (position, item) {
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute('text', {
        font: 'exo2bold',
        align: 'center',
        width: 70,
        color: '#e65100',
        value: item.title
      })
      const elPosition = position
      elPosition.y = -20   
      entityEl.setAttribute('position', elPosition)
      entityEl.setAttribute('visible', true)
      return entityEl
    },
  });
  