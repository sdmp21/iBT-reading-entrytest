// ============================================================
// Reading test content — ORIGINAL material written to mirror
// the task types of the iBT Reading section (fill-in-the-blanks,
// short daily-life texts, academic passages). Not copied from
// any copyrighted test.
//
// Structure per module (25 questions / 20 minutes):
//   - Fill in the blanks:      10 questions (Q1–10)
//   - Two short daily-life texts: 6 questions total (Q11–16)
//   - One academic passage:    9 questions (Q17–25)
// Two modules = 50 questions total.
// ============================================================

const READING_TEST = {
  title: "iBT Reading Mock Entry Test",
  modules: [
    // ===========================================================
    // MODULE 1
    // ===========================================================
    {
      id: 1,
      label: "Reading Module 1",
      timeLimitSeconds: 20 * 60,
      screens: [
        {
          type: "fillblank",
          range: "Questions 1–10",
          instructions: "Fill in the missing letters in the paragraph.",
          parts: [
            { text: "Long before alphabets existed, early societies recorded information using pictures and symbols. We know from clay tablets that have survived for over 5,000 years that ancient Sumerians develo" },
            { blankId: 1, answer: "ped", len: 3 },
            { text: " one of the fir" },
            { blankId: 2, answer: "st", len: 2 },
            { text: " writing systems. We mi" },
            { blankId: 3, answer: "ght", len: 3 },
            { text: " assume th" },
            { blankId: 4, answer: "at", len: 2 },
            { text: " early writing was us" },
            { blankId: 5, answer: "ed", len: 2 },
            { text: " mainly f" },
            { blankId: 6, answer: "or", len: 2 },
            { text: " stories. How" },
            { blankId: 7, answer: "ever", len: 4 },
            { text: ", it i" },
            { blankId: 8, answer: "s", len: 1 },
            { text: " clear fr" },
            { blankId: 9, answer: "om", len: 2 },
            { text: " the tablets th" },
            { blankId: 10, answer: "at", len: 2 },
            { text: " record-keeping was the primary purpose. Merchants recorded trades, farmers tracked harvests, and officials logged taxes." }
          ]
        },

        {
          type: "shorttext",
          textKind: "notice",
          title: "Municipal City Library",
          heading: "Read a notice.",
          body: [
            "Access Your Account Online",
            "Convenient, secure, always available. Renew borrowed items and reserve new titles through our digital catalog. Log in at any library computer, or download the mobile app and enter your library card number to get started."
          ],
          questions: [
            { id: 11, prompt: "What type of organization issued the notice?", options: ["An online bookstore", "A public library", "A technology company", "A school"], answer: 1 },
            { id: 12, prompt: "How can patrons access the digital catalog?", options: ["By visiting the library in person only", "By calling customer service", "By using a library computer or the mobile app", "By mailing a request form"], answer: 2 },
            { id: 13, prompt: "What must patrons provide to log in through the mobile app?", options: ["A library card number", "A home address", "A credit card number", "An email password"], answer: 0 }
          ]
        },

        {
          type: "shorttext",
          textKind: "social",
          title: "Riverside Books",
          heading: "Read a social media post.",
          body: [
            "Every Friday evening, our bookstore hosts a cozy reading circle! Grab a warm drink from our in-house café and settle in for lively discussion about that week's chosen novel. New members are always welcome, even if you haven't finished the book yet.",
            "Beyond the reading circle, we also carry a curated selection of rare and out-of-print titles that are hard to find elsewhere. Local authors frequently stop by for signings, and our staff loves offering personalized recommendations based on your favorite genres. Stop in this Friday and join the conversation!"
          ],
          questions: [
            { id: 14, prompt: "What is the main purpose of the post?", options: ["To advertise a sale on rare books", "To describe the store's weekly activities and offerings", "To announce the store's closing hours", "To introduce a new staff member"], answer: 1 },
            { id: 15, prompt: "What can be inferred about the reading circle?", options: ["Attendees must finish the book beforehand.", "It only meets once a month.", "Newcomers are welcome regardless of reading progress.", "It requires a paid membership."], answer: 2 },
            { id: 16, prompt: "Why does the author mention local authors?", options: ["To explain how the bookstore selects its rare titles", "To highlight another reason to visit the store", "To compare the store to larger bookshops", "To criticize other local businesses"], answer: 1 }
          ]
        },

        {
          type: "passage",
          heading: "Read an academic passage.",
          title: "The Bystander Effect",
          paragraphs: [
            "In 1964, a young woman was attacked in New York City while several nearby residents reportedly heard her cries for help. Despite the commotion, few of them intervened or called for assistance. This event prompted psychologists to investigate why people are sometimes reluctant to help others in emergencies, especially when other witnesses are present.",
            "Researchers John Darley and Bibb Latané proposed that the presence of other bystanders can actually reduce the likelihood that any single person will help. They called this phenomenon the bystander effect. According to their theory, individuals assume that someone else in the crowd will take responsibility for helping, a process known as diffusion of responsibility.",
            "In a series of experiments, Darley and Latané found that participants were far less likely to report an emergency, such as smoke filling a room, when they believed other people were also aware of the situation. When participants believed they were the only witness, they responded quickly and consistently.",
            "The bystander effect has since been observed in a wide range of settings, from public streets to online environments where users witness harmful behavior but assume another user will report it. Understanding this effect has led some organizations to train employees and bystanders to take direct, individual action rather than relying on the group.",
            "Darley and Latané's broader model suggests that helping behavior involves five distinct steps: noticing the event, interpreting it as an emergency, assuming personal responsibility, deciding how to help, and finally implementing that decision. A breakdown at any one of these steps, they argued, could prevent a bystander from intervening, even if the person feels genuine concern for the victim."
          ],
          questions: [
            { id: 17, prompt: "What is the passage mainly about?", options: ["A famous crime in New York City", "A psychological explanation for reluctance to help others", "Differences between online and offline behavior", "Techniques used in psychological experiments"], answer: 1 },
            { id: 18, prompt: "The word \"commotion\" in the first paragraph is closest in meaning to", options: ["disturbance", "silence", "agreement", "investigation"], answer: 0 },
            { id: 19, prompt: "Why did Darley and Latané conduct their experiments?", options: ["To determine how quickly people evacuate buildings", "To test whether the presence of others affects helping behavior", "To measure how loudly people cry for help", "To compare crime rates in different cities"], answer: 1 },
            { id: 20, prompt: "According to the passage, all of the following are true about diffusion of responsibility EXCEPT:", options: ["It occurs when people assume someone else will help.", "It was proposed by Darley and Latané.", "It makes individuals more likely to act alone.", "It can reduce the overall likelihood that anyone helps."], answer: 2 },
            { id: 21, prompt: "Why does the author mention online environments?", options: ["To suggest that the bystander effect only occurs in person", "To show that the bystander effect can appear in various settings", "To criticize how organizations train employees", "To provide an example of a setting without witnesses"], answer: 1 },
            { id: 22, prompt: "The word \"reluctant\" in the first paragraph is closest in meaning to", options: ["unwilling", "eager", "confused", "forgetful"], answer: 0 },
            { id: 23, prompt: "According to the passage, what is the first step in Darley and Latané's five-step model?", options: ["Deciding how to help", "Noticing the event", "Assuming responsibility", "Interpreting the event as an emergency"], answer: 1 },
            { id: 24, prompt: "What can be inferred about a bystander who notices an emergency but fails to interpret it as one?", options: ["They will still help immediately.", "They are unlikely to proceed to the next step of helping.", "They will call the police regardless.", "They are more likely than others to intervene."], answer: 1 },
            { id: 25, prompt: "Why does the author describe the five-step model in the passage?", options: ["To criticize Darley and Latané's original theory", "To explain in more detail how the bystander effect can occur", "To compare bystanders across different countries", "To argue that bystanders never help in emergencies"], answer: 1 }
          ]
        }
      ]
    },

    // ===========================================================
    // MODULE 2
    // ===========================================================
    {
      id: 2,
      label: "Reading Module 2",
      timeLimitSeconds: 20 * 60,
      screens: [
        {
          type: "fillblank",
          range: "Questions 1–10",
          instructions: "Fill in the missing letters in the paragraph.",
          parts: [
            { text: "Coral reefs are among the most biologically diverse ecosystems on Earth, hosting thousands of species of fish, invertebrates, and pla" },
            { blankId: 1, answer: "nts", len: 3 },
            { text: ". Despite covering le" },
            { blankId: 2, answer: "ss", len: 2 },
            { text: " than one percent of the ocean floor, reefs support ne" },
            { blankId: 3, answer: "arly", len: 4 },
            { text: " a quarter of all marine species. Ris" },
            { blankId: 4, answer: "ing", len: 3 },
            { text: " water temperatures, however, threaten this deli" },
            { blankId: 5, answer: "cate", len: 4 },
            { text: " balance, ca" },
            { blankId: 6, answer: "using", len: 5 },
            { text: " coral to expel the algae liv" },
            { blankId: 7, answer: "ing", len: 3 },
            { text: " within their tissues in a process kno" },
            { blankId: 8, answer: "wn", len: 2 },
            { text: " as bleaching. Without intervention, scientists warn that many ree" },
            { blankId: 9, answer: "fs", len: 2 },
            { text: " could disappear within dec" },
            { blankId: 10, answer: "ades", len: 4 },
            { text: "." }
          ]
        },

        {
          type: "shorttext",
          textKind: "email",
          title: "Email",
          heading: "Read an email.",
          meta: { to: "p.alvarez21@dmail.com", from: "cedarparkrec@dmail.com", date: "03/14/2026", subject: "Pottery Class Registration Confirmed" },
          body: [
            "Dear Ms. Alvarez,",
            "Your registration for the beginner pottery class has been confirmed. The class will take place every Tuesday evening starting April 2nd at 6:30 PM. All clay and tools will be supplied, but please wear clothing you don't mind getting dirty.",
            "Best regards, Cedar Park Recreation Center"
          ],
          questions: [
            { id: 11, prompt: "When does the pottery class begin?", options: ["March 14th", "April 2nd", "Every Tuesday morning", "At 6:30 AM"], answer: 1 },
            { id: 12, prompt: "What should Ms. Alvarez bring to class?", options: ["Her own clay", "A set of tools", "Clothes she doesn't mind getting dirty", "Proof of payment"], answer: 2 },
            { id: 13, prompt: "What is provided by the recreation center?", options: ["Clay and tools", "Aprons", "Transportation", "Payment plans"], answer: 0 }
          ]
        },

        {
          type: "shorttext",
          textKind: "email",
          title: "Email",
          heading: "Read an email.",
          meta: { to: "marcusgreen@dmail.com", from: "rivertowngarden@dmail.com", date: "05/02/2026", subject: "Join Us — New Volunteer Orientation This Saturday!" },
          body: [
            "Dear Neighbors,",
            "We're inviting you—and anyone else interested—to our new volunteer orientation at the Rivertown Community Garden this Saturday morning. This session is a great opportunity to learn about our raised beds, composting system, and seasonal planting schedule.",
            "The orientation, open to first-time volunteers and returning members alike, will include a garden tour, a short training session, and light refreshments. It's the perfect chance to meet fellow gardeners and find a plot that fits your schedule.",
            "Bring a friend! We're also offering free seed packets to everyone who attends.",
            "For questions, contact us at rivertowngarden@dmail.com.",
            "Warm regards, The Rivertown Garden Team"
          ],
          questions: [
            { id: 14, prompt: "What is the main purpose of the email?", options: ["To sell gardening supplies", "To invite people to a volunteer orientation", "To announce the closing of the garden", "To request donations for new equipment"], answer: 1 },
            { id: 15, prompt: "What can be inferred about the orientation?", options: ["It is only open to returning members.", "It requires an application fee.", "It welcomes both new and experienced volunteers.", "It takes place indoors only."], answer: 2 },
            { id: 16, prompt: "What is offered to everyone who attends?", options: ["A discount on membership", "Free seed packets", "A certificate of completion", "A private garden plot"], answer: 1 }
          ]
        },

        {
          type: "passage",
          heading: "Read an academic passage.",
          title: "Urban Heat Islands",
          paragraphs: [
            "Cities are often several degrees warmer than the surrounding countryside, a phenomenon known as the urban heat island effect. This temperature difference is most noticeable at night and during the summer months, when concrete, asphalt, and buildings release heat absorbed during the day.",
            "Several factors contribute to urban heat islands. Dark surfaces such as roads and rooftops absorb more sunlight than natural landscapes like forests or grasslands. In addition, the removal of vegetation reduces shade and eliminates the cooling effects of evapotranspiration, the process by which plants release moisture into the air.",
            "Urban heat islands can have serious consequences. Higher temperatures increase energy demand for air conditioning, worsen air quality, and pose health risks, particularly for elderly residents and those without access to cooling. Some cities have reported measurable increases in heat-related illnesses during prolonged periods of extreme heat.",
            "To address these challenges, urban planners have proposed several solutions, including green roofs, increased tree cover, and reflective building materials that absorb less heat. Some cities have already begun painting rooftops white to reflect sunlight, a low-cost strategy that can meaningfully reduce indoor temperatures.",
            "A study conducted in Los Angeles found that neighborhoods with more tree cover experienced significantly lower surface temperatures than those with little vegetation, even when located only a few blocks apart. Researchers concluded that strategic tree planting could be one of the most cost-effective tools available to city planners seeking to reduce urban heat."
          ],
          questions: [
            { id: 17, prompt: "What is the passage mainly about?", options: ["Differences between rural and urban energy use", "Why cities become warmer than surrounding areas and how to address it", "The history of urban planning", "How trees affect air quality"], answer: 1 },
            { id: 18, prompt: "The word \"evapotranspiration\" in the second paragraph is closest in meaning to", options: ["the process of plants releasing moisture into the air", "the absorption of sunlight by dark surfaces", "the removal of vegetation from cities", "the measurement of air quality"], answer: 0 },
            { id: 19, prompt: "Why does the author mention dark surfaces such as roads and rooftops?", options: ["To explain why cities require more streetlights", "To describe a cause of the urban heat island effect", "To argue that cities should be built without roads", "To compare construction materials used in different countries"], answer: 1 },
            { id: 20, prompt: "According to the passage, all of the following are true about urban heat islands EXCEPT:", options: ["They can increase energy demand.", "They pose greater health risks to elderly residents.", "They are most noticeable during winter mornings.", "They are worsened by the removal of vegetation."], answer: 2 },
            { id: 21, prompt: "Why does the author mention cities painting rooftops white?", options: ["To criticize the cost of green roofs", "To provide an example of a low-cost solution", "To argue that reflective materials are ineffective", "To explain how rooftops absorb heat"], answer: 1 },
            { id: 22, prompt: "The word \"meaningfully\" in the fourth paragraph is closest in meaning to", options: ["substantially", "barely", "temporarily", "accidentally"], answer: 0 },
            { id: 23, prompt: "According to the study mentioned in the passage, what did researchers find in Los Angeles neighborhoods?", options: ["Areas with more trees had higher temperatures.", "Areas with more tree cover had lower surface temperatures.", "Tree cover made no difference in temperature.", "All neighborhoods had identical temperatures regardless of vegetation."], answer: 1 },
            { id: 24, prompt: "What can be inferred about strategic tree planting, according to the passage?", options: ["It is more expensive than other cooling methods.", "It could be a cost-effective way to reduce urban heat.", "It has no measurable effect on temperature.", "It is only effective in rural areas."], answer: 1 },
            { id: 25, prompt: "Why does the author mention the Los Angeles study?", options: ["To criticize the city's urban planning", "To provide evidence supporting tree planting as a cooling strategy", "To compare Los Angeles to other cities", "To explain how trees absorb carbon dioxide"], answer: 1 }
          ]
        }
      ]
    }
  ]
};
