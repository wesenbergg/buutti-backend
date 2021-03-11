const data = [
  {
    id: 0,
    title: "Saatana saapuu Moskovaan",
    author: "Mihail Bulgakov",
    description: "Saatana saapuu Moskovaan - Tampereen Teatteritampereenteatteri.fi › NäytelmätMihail Bulgakovin Saatana saapuu Moskovaan on yksi kaikkien aikojen klassikkoromaaneista. Se on historiallinen, mystinen ja romanttinen suurteos, joka sijoittuu ..."
  },
  {
    id: 1,
    title: "Lolita",
    author: "Vladimir Nabokov",
    description: "Lolita on Vladimir Nabokovin vuonna 1955 julkaistu romaani. Romaani on saavuttanut kuuluisuuden uutta luovan tyylinsä ja kiistanalaisen aiheensa vuoksi..."
  },
  {
    id: 2,
    title: "Sota ja Rauha",
    author: "Leo Tolstoi",
    description: "Se on myös läpileikkaus koko Venäjän yhteiskunnasta. Sodan ja rauhan tuorein suomennos on vuodelta 2005. Eero Balk on kääntänyt sen romaanin ..."
  }
]

const previewData = data.map(b => ({ id: b.id, title: b.title, author: b.author }))

module.exports = { data, previewData }