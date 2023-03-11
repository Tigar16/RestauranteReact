const Body = () => {
  return (
    <section className="bodyText">
      <div className="bodyCaja">
      <picture>
          <img src="data:image/jpeg;base64,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" alt="" />
        </picture>
      </div>
      <div className="bodyCaja">
        <h1>Pandingas</h1>
        <p>
        El mejor sabor en su mesa
        Pandingas es una empresa dedicada a la actividad alimenticia. 
        Su gestión empresarial, basada en la excelencia y orientación al cliente, 
        la ha posicionado como la empresa líder en el mercado.
        Es una empresa dedicada a la actividad alimenticia. 
        Su gestión empresarial, basada en la excelencia y orientación al cliente, 
        la ha posicionado como la empresa líder en el mercado colombiano de producción de alimentos
        instantáneos para consumo humano.
        </p>
      </div>
    </section>
  );
};

export default Body;
