import React from "react";
import { Card } from "antd";

export default function Main() {
  return (
    <div className="main-contain">
      <div className="site-card-wrapper">
        <Card title="Banquetes" bordered={false}>
          Menú servido en tiempos. Contamos con una gran variedad de menús:
          Cremas, Pastas, Ensaladas & Cortes.
        </Card>
        <Card title="Selección de recintos" bordered={false}>
          Contamos con servicio en más de 30 salones, jardines y haciendas en la
          región.
        </Card>
        <Card title="Menú internacional" bordered={false}>
          Conoce nuestro servicio de diseño de menú en donde podrás seleccionar
          una gran variedad de menús de cocina italiana, argentina, española,
          francesa, etc.
        </Card>
      </div>

      <div className="site-card-wrapper">
        <Card title="Menú mexicano" bordered={false}>
          Conoce nuestra cocina mexicana contemporánea en donde encontrarás
          mezcla perfecta entre el sabor y la novedosa cocina fusión.
        </Card>
        <Card title="Diseño de eventos" bordered={false}>
          Interpretamos tus ideas para plasmarlas en tu evento, diseñamos,
          producimos y realizamos.
        </Card>
        <Card title="Decoración" bordered={false}>
          Candiles, Lienzos, Mobiliario Vintage, Mesas de madera, Silla Tiffany,
          Silla Avantgard, Silla Versalles, Cortinas, iluminación
          arquitectónica, escenarios, etc.
        </Card>
      </div>

      <div className="site-card-wrapper">
        <Card title="Buffet" bordered={false}>
          Servicio de taquiza buffet, Buffet internacional, Buffet temático
          siempre manteniendo nuestra calidad en servicios gastronómicos.
        </Card>
        <Card title="Diseño floral" bordered={false}>
          El diseño floral será el alma de tu evento, contamos con un amplio
          catálogo de servicios florales (Iglesia, Centros de mesa, Auto,
          decoración, etc.)
        </Card>
        <Card title="Repostería" bordered={false}>
          El postre será indispensable para cerrar con broche de oro tu
          banquete, contamos con amplia variedad de postres en nuestro catálogo
          de repostería fina.
        </Card>
      </div>

      <div className="site-card-wrapper">
        <Card title="Canapés" bordered={false}>
          Para una bienvenida, recepción, presentación de producto o un coctel,
          los canapés son el acompañante ideal.
        </Card>
        <Card title="Coordinación de eventos" bordered={false}>
          Te ofrecemos nuestros servicios especializados de planeación,
          coordinación, logística y supervisión de eventos.
        </Card>
        <Card title="Fondant" bordered={false}>
          El pastel es el nuevo protagonista del evento, conoce nuestro catálogo
          de diseños personalizados de pasteles en la pasta fondant.
        </Card>
      </div>

      <div className="site-card-wrapper">
        <Card title="Barra de postres" bordered={false}>
          Para agasajar a tus invitados con una gran variedad de postres,
          confitería, cupcakes, muffins, etc.
        </Card>
        <Card title="Fiestas temáticas" bordered={false}>
          Le damos a tu evento un giro inesperado con la producción de fiestas
          temáticas, personajes, imitadores, zanqueros, escenarios, etc.
        </Card>
        <Card title="Pastelería" bordered={false}>
          Un pastel de boda nunca pasa de moda, un buen pastel quedará en la
          memoria de tus invitados.
        </Card>
      </div>

      <div className="site-card-wrapper">
        <Card title="Coctelería" bordered={false}>
          Para darle la bienvenida a todos tus invitados, te llevamos nuestra
          barra iluminada y una gran variedad de cocteles.
        </Card>
        <Card title="Grupos versátiles" bordered={false}>
          Apoyo en Selección de Grupos versátiles Te apoyamos con la gestión y
          selección de grupos versátiles, siempre garantizando el mejor
          proveedor y costo en el mercado.
        </Card>
        <Card title="Eventos Corporativos" bordered={false}>
          Servicio y profesionalismo: Presentación de Producto, Inauguraciones,
          Servicio de Coffee Break, Canapés, Fiestas de fin de año, Clausuras,
          Rallys, etc.
        </Card>
      </div>
    </div>
  );
}
