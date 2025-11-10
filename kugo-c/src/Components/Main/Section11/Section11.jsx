import React, { useState, useRef, useEffect } from 'react'
import styles from './Section11.module.css'
import plus from '../../../../public/akar-icons_plus.png'

const faqs = [
  {
    question: 'Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?',
    answer:
      'При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне.',
  },
  {
    question: 'У меня в городе самокаты Kugoo дешевле. Почему?',
    answer:
      'Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.',
  },
  {
    question: 'Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?',
    answer:
      'Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.',
  },
  {
    question: 'Где находятся пункты самовывоза в моем городе?',
    answer:
      'Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.',
  },
]

const Section11 = () => {
  const [openIndexes, setOpenIndexes] = useState([])

  const contentRefs = useRef([])

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return (
    <div className={styles.eleven_sec_all}>
      <div className={styles.eleven_sec}>
        <div className={styles.fornazv}>
          <p>Отвечаем на вопросы покупателей</p>
        </div>
        <div className={styles.qacontainer}>
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIndexes.includes(idx)
            return (
              <div key={idx} className={styles.qa}>
                <div
                  className={styles.forQuestion}
                  onClick={() => toggleAnswer(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <div>
                    <p>{question}</p>
                  </div>
                  <div>
                    <img
                      src={plus}
                      alt="toggle"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </div>
                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  className={styles.forAnswer}
                  style={{
                    maxHeight: isOpen
                      ? contentRefs.current[idx]?.scrollHeight + 'px'
                      : '0px',
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? '1rem' : '0 1rem',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease, padding 0.3s ease',
                  }}
                >
                  <p>{answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section11