import React from "react";
export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
    children: "https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg",
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "#",
          children: [{ children: "导航一", name: "text" }],
        },
        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Ant Design",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "企业级 UI 设计体系",
                },
              ],
            },
          },
          {
            name: "sub1",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Ant Design",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "企业级 UI 设计体系",
                },
              ],
            },
          },
        ],
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "#",
          children: [{ children: "导航二", name: "text" }],
        },
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "#",
          children: [{ children: "导航三", name: "text" }],
        },
      },
      {
        name: "item3",
        className: "header0-item",
        children: {
          href: "#",
          children: [{ children: "导航四", name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};
export const Banner01DataSource = {
  wrapper: { className: "banner0" },
  textWrapper: { className: "banner0-text-wrapper" },
  title: {
    className: "banner0-title",
    children: "https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png",
  },
  content: {
    className: "banner0-content",
    children: "一个高效的页面动画解决方案",
  },
  button: { className: "banner0-button", children: "Conócenos" },
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: "¿Por qué elegirnos?" }],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Precio",
            },
            {
              name: "content",
              children:
                "Ofrecemos el mejor precio debido a que el trato es directo no hay intermediarios ni letras pequeñas",
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Logística",
            },
            {
              name: "content",
              children:
                "Planeamos detalladamente cada momento, evitando el más mínimo error",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Garantía",
            },
            {
              name: "content",
              children:
                "Con ayuda de nuestro equipo lograremos ese evento que deseas.",
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      { name: "title", children: "Servicios", className: "title-h1" },
      {
        name: "content",
        className: "title-content",
        children:
          "Contamos con todos los servicios para cubrir cualquier tipo de eventos.",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          content: { children: "Audio y Video" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          content: { children: "Producción y escenografía" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://images.pexels.com/photos/1728163/pexels-photo-1728163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          content: { children: "Servicio fotográfico" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          content: { children: "Diseño y renta de stands" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://images.pexels.com/photos/8850721/pexels-photo-8850721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          content: { children: "Sistema de votación y registro" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://images.pexels.com/photos/3769144/pexels-photo-3769144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
          content: { children: "Personal de Atención" },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "¿Quiénes somos?",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children:
          "Somos una empresa que ofrece Proveer servicios en Banquetes, Organización de eventos y meeting planner así como Proveedor de distintos productos y servicios a Restaurantes, Grills, cantinas entre otros a nivel nacional e internacional especializados en el segmento de grupos, convenciones, congresos, eventos, juntas de trabajo, catering, reservaciones, inscripciones a congresos, coordinación de eventos y supervisión de todos los servicios contratados en el destino solicitado.",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Visión" },
          content: {
            className: "content3-content",
            children:
              "Consolidarnos como la mejor empresa del mercado de meetings y desarrollo de eventos a nivel nacional e internacional, reconocida por la calidad de sus servicios, honestidad y profesionalismo que nos caracteriza.",
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Misión" },
          content: {
            className: "content3-content",
            children:
              "Facilitar a nuestros clientes el acceso a los proveedores más calificados en el sector Restaurantero, asi como el apoyo al sector turístico, llevando con ello a desarrollar ambos entornos, alimentos y hospedajes para lograr satisfacer sus necesidades otorgándoles un servicio de calidad.",
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Inspiración" },
          content: {
            className: "content3-content",
            children:
              "Contamos con un equipo de expertos encargados de generar todas las ideas necesarias para lograr el evento que requieras, ya que lo más importante para nosotros es tu satisfacción total",
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children:
            "https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: "Animation specification and components of Ant Design.",
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "产品" },
        childWrapper: {
          children: [
            { name: "link0", href: "#", children: "产品更新记录" },
            { name: "link1", href: "#", children: "API文档" },
            { name: "link2", href: "#", children: "快速入门" },
            { name: "link3", href: "#", children: "参考指南" },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "关于" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "FAQ" },
            { href: "#", name: "link1", children: "联系我们" },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "资源" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "Ant Design" },
            { href: "#", name: "link1", children: "Ant Motion" },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: <span>© 2021 - Derechos Reservados</span>,
  },
};
