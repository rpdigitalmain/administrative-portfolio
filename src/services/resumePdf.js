const PAGE_SIZE = [595.28, 841.89]
const PAGE_MARGIN = 48
const CONTENT_WIDTH = PAGE_SIZE[0] - PAGE_MARGIN * 2
const COLORS = {
  ink: { r: 0.16, g: 0.18, b: 0.2 },
  muted: { r: 0.39, g: 0.42, b: 0.45 },
  line: { r: 0.86, g: 0.88, b: 0.89 },
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/[–—−]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .trim()
}

function nonEmptyValues(items, getValue) {
  return (Array.isArray(items) ? items : [])
    .map(getValue)
    .map(cleanText)
    .filter(Boolean)
}

export async function createResumePdf(portfolio) {
  const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib')
  const document = await PDFDocument.create()
  const regular = await document.embedFont(StandardFonts.Helvetica)
  const bold = await document.embedFont(StandardFonts.HelveticaBold)
  const color = (value) => rgb(value.r, value.g, value.b)
  const pages = []
  let page
  let cursorY

  document.setTitle(`${cleanText(portfolio.name)} - Currículo`)
  document.setAuthor(cleanText(portfolio.name))
  document.setSubject('Currículo profissional')
  document.setCreator('Portfólio Administrativo')

  const addPage = () => {
    page = document.addPage(PAGE_SIZE)
    pages.push(page)
    cursorY = PAGE_SIZE[1] - PAGE_MARGIN
  }

  const ensureSpace = (height) => {
    if (!page || cursorY - height < PAGE_MARGIN + 20) addPage()
  }

  const drawWrappedText = (value, { font = regular, size = 10, lineHeight = 14, gap = 0, textColor = COLORS.ink } = {}) => {
    const text = cleanText(value)
    if (!text) return

    const words = text.split(/\s+/)
    const lines = []
    let currentLine = ''

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word
      if (currentLine && font.widthOfTextAtSize(candidate, size) > CONTENT_WIDTH) {
        lines.push(currentLine)
        currentLine = word
      } else {
        currentLine = candidate
      }
    }
    if (currentLine) lines.push(currentLine)

    for (const line of lines) {
      ensureSpace(lineHeight)
      page.drawText(line, {
        x: PAGE_MARGIN,
        y: cursorY - size,
        size,
        font,
        color: color(textColor),
      })
      cursorY -= lineHeight
    }
    cursorY -= gap
  }

  const drawSection = (title, records, renderRecord) => {
    if (!records.length) return
    ensureSpace(42)
    cursorY -= 3
    page.drawText(cleanText(title).toUpperCase(), {
      x: PAGE_MARGIN,
      y: cursorY - 9,
      size: 9,
      font: bold,
      color: color(COLORS.muted),
      characterSpacing: 0.7,
    })
    cursorY -= 12
    page.drawLine({
      start: { x: PAGE_MARGIN, y: cursorY },
      end: { x: PAGE_SIZE[0] - PAGE_MARGIN, y: cursorY },
      thickness: 0.7,
      color: color(COLORS.line),
    })
    cursorY -= 6

    for (const record of records) renderRecord(record)
    cursorY -= 2
  }

  const drawListSection = (title, values) => {
    if (!values.length) return
    drawSection(title, [values.join(' | ')], (value) => {
      drawWrappedText(value, { size: 10, lineHeight: 14 })
    })
  }

  addPage()
  drawWrappedText(portfolio.name, { font: bold, size: 25, lineHeight: 31 })
  drawWrappedText(portfolio.role, { size: 11, lineHeight: 16, gap: 6, textColor: COLORS.muted })

  const areaNames = nonEmptyValues(portfolio.areas, (area) => area.value || area.label)
  drawListSection('Áreas de atuação', areaNames)

  const summaryText = cleanText(portfolio.summary?.text)
  const summaryRecords = summaryText ? [portfolio.summary] : []
  drawSection('Resumo profissional', summaryRecords, (summary) => {
    drawWrappedText(summary.text, { size: 10, lineHeight: 14, gap: 4 })
    const highlight = [summary.metric, summary.result].map(cleanText).filter(Boolean).join(' - ')
    drawWrappedText(highlight, { font: bold, size: 9.5, lineHeight: 13, textColor: COLORS.muted })
  })

  const skills = nonEmptyValues(portfolio.skills, (item) => item.label)
  drawListSection('Competências', skills)

  const tools = nonEmptyValues(portfolio.tools, (item) => item.label)
  drawListSection('Ferramentas', tools)

  const languages = nonEmptyValues(portfolio.languages, (item) => item.label)
  drawListSection('Idiomas', languages)

  const experience = (Array.isArray(portfolio.experience) ? portfolio.experience : [])
    .filter((item) => [item.title, item.company, item.period, item.result].some((value) => cleanText(value)))
  drawSection('Experiência profissional', experience, (item) => {
    drawWrappedText(item.title, { font: bold, size: 10.5, lineHeight: 14 })
    const details = [item.company, item.period].map(cleanText).filter(Boolean).join(' | ')
    drawWrappedText(details, { size: 9, lineHeight: 12, textColor: COLORS.muted })
    drawWrappedText(item.result, { size: 9.5, lineHeight: 13, gap: 6 })
  })

  const education = (Array.isArray(portfolio.education) ? portfolio.education : [])
    .filter((item) => [item.title, item.institution, item.year].some((value) => cleanText(value)))
  drawSection('Formação', education, (item) => {
    drawWrappedText(item.title, { font: bold, size: 10, lineHeight: 14 })
    drawWrappedText([item.institution, item.year].map(cleanText).filter(Boolean).join(' | '), {
      size: 9,
      lineHeight: 12,
      gap: 5,
      textColor: COLORS.muted,
    })
  })

  const independentLearning = (Array.isArray(portfolio.independentLearning) ? portfolio.independentLearning : [])
    .filter((item) => [item.title, item.institution, item.year].some((value) => cleanText(value)))
  drawSection('Aprendizado independente', independentLearning, (item) => {
    drawWrappedText(item.title, { font: bold, size: 10, lineHeight: 14 })
    drawWrappedText([item.institution, item.year].map(cleanText).filter(Boolean).join(' | '), {
      size: 9,
      lineHeight: 12,
      gap: 5,
      textColor: COLORS.muted,
    })
  })

  const socialLinks = (Array.isArray(portfolio.socialLinks) ? portfolio.socialLinks : [])
    .map((item) => {
      const phoneNumber = cleanText(item.phoneNumber).replace(/\D/g, '')
      const url = item.url || (phoneNumber ? `https://wa.me/${phoneNumber}` : '')
      return [cleanText(item.label), cleanText(url)].filter(Boolean).join(': ')
    })
    .filter(Boolean)
  drawListSection('Redes sociais', socialLinks)

  pages.forEach((resumePage, index) => {
    resumePage.drawText(`${index + 1} / ${pages.length}`, {
      x: PAGE_SIZE[0] - PAGE_MARGIN - 36,
      y: 22,
      size: 8,
      font: regular,
      color: color(COLORS.muted),
    })
  })

  return document.save()
}

export function getResumeFileName(portfolio) {
  const fileName = cleanText(portfolio.name)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'curriculo'

  return `${fileName}-curriculo.pdf`
}

export async function downloadResumePdf(portfolio) {
  const pdfBytes = await createResumePdf(portfolio)
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = objectUrl
  link.download = getResumeFileName(portfolio)
  link.click()
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
}
