var respecConfig = {
  
  //voor specStatus mogelijkheden zie https://github.com/geonovum/respec/wiki/specStatus
  specStatus: "GN-WV",

  //voor specType mogelijkheden zie https://github.com/geonovum/respec/wiki/specType
  specType: "HR",

  // Geef bij emailComments een ander emailadres op als dat gewenst is.
  emailComments: '...',

  //voor pubDomain mogelijkheden zie https://github.com/geonovum/respec/wiki/pubDomain
  pubDomain: "...",

  // Voor publishDate zie https://github.com/w3c/respec/wiki/publishDate
  // Als er geen publishDate is opgegeven, genereert ReSpec de dataum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  // https://docs.geostandaarden.nl/{pubDomain}/{shortName} // Ben Krocké: Zal nog aangepast moeten worden naar Logius standaarden.
  publishDate: "2017-12-22",

  // Als er een eerder gepubliceerde versie is, geef dan de datum daarvan op
  previousPublishDate: "2017-05-31",

  // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
  // Als previousMaturity niet opgegeven wprdt, maar previousPublishDate wel, dan wordt dezelfde status gebruikt als bij specStatus
  previousMaturity: "GN-VV",

  // licentie. Kiezen uit: 
  license: 'cc-by-nd',

  // logos: [], // Geef een lege array op als er geen Logius logo moet staan

  doJsonLd: true,

  editors: [
    {
      name: "...",
      company: "...",
      companyURL: "http://www.logius.nl/",
    },
    {
      name: "...",
      company: "...",
      companyURL: "http://www.logius.nl/",
    },
  ],

  // shortName = korte naam voor in de url van het document, gebruik alleen letters, cijfers en eventueel '-'
  shortName: "...",

  // url van de github repository waar je in werkt
  github: "https://github.com/centrumvoorstandaarden/...",

  // url van de issue lijst in de github repository waar je in werkt
  issueBase: "https://github.com/centrumvoorstandaarden/.../issues/",

  // in localBiblio kun je bibliografische items opnemen. In de tekst kun je dan tussen blokhaken verwijzen naar de korte naam bv [NEN3610].
  localBiblio: {
    Foo: {
      href: "...",
      title:
        "...",
      authors: [""],
      date: "Maart 2011",
      publisher: "...",
    },
  },

  format: "markdown",
};
