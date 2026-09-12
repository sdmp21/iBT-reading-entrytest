// ============================================================
// Reading test content — ORIGINAL material written to mirror
// the task types of the iBT Reading section (fill-in-the-blanks,
// short daily-life texts, academic passages). Not copied from
// any copyrighted test.
//
// Structure per module (50 questions / 40 minutes):
//   - Fill in the blanks:      10 questions (Q1–10)
//   - Six short daily-life texts: 20 questions total (Q11–30)
//   - Two academic passages:  20 questions total (Q31–50)
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
      timeLimitSeconds: 40 * 60,
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
          type: "shorttext",
          textKind: "notice",
          title: "Cedar Hills Community Center",
          heading: "Read a notice.",
          body: [
            "Summer Pool Schedule Now Available",
            "Open swim sessions run daily from 6 AM to 8 PM, with lane reservations available for lap swimmers between 6 AM and 9 AM. Children under 12 must be accompanied by an adult at all times. Swim lessons for beginners and intermediate swimmers begin the first week of June; registration is required in advance at the front desk."
          ],
          questions: [
            { id: 17, prompt: "What is the notice mainly about?", options: ["New membership pricing", "The center's summer pool schedule", "A change in lifeguard staffing", "The closure of the pool"], answer: 1 },
            { id: 18, prompt: "When can lap swimmers reserve lanes?", options: ["All day", "6 AM to 9 AM", "After 8 PM", "Only on weekends"], answer: 1 },
            { id: 19, prompt: "What is required before a child can use the pool?", options: ["A signed waiver", "Adult supervision", "A swim test", "A membership fee"], answer: 1 }
          ]
        },

        {
          type: "shorttext",
          textKind: "email",
          title: "Email",
          heading: "Read an email.",
          meta: { to: "r.tanaka22@dmail.com", from: "fitzone@dmail.com", date: "06/10/2026", subject: "Your Loyalty Discount is Here!" },
          body: [
            "Dear Mr. Tanaka,",
            "Thank you for being a FitZone member for over a year! As a token of our appreciation, we're offering you a 15% discount on your next membership renewal. This offer is valid until the end of the month and can be applied automatically at checkout using the code LOYAL15.",
            "We hope to see you at the gym soon!",
            "Best, FitZone Team"
          ],
          questions: [
            { id: 20, prompt: "Why did FitZone send this email?", options: ["To announce new gym equipment", "To offer a loyalty discount to a long-time member", "To notify a member that their membership expired", "To advertise a new gym location"], answer: 1 },
            { id: 21, prompt: "How can Mr. Tanaka apply the discount?", options: ["By calling customer service", "By visiting the gym in person", "By using a code at checkout", "By replying to the email"], answer: 2 },
            { id: 22, prompt: "What can be inferred about the offer?", options: ["It is available to all new members.", "It has no expiration date.", "It is limited to a certain time period.", "It requires a minimum purchase amount."], answer: 2 }
          ]
        },

        {
          type: "shorttext",
          textKind: "social",
          title: "Greenfield Farmers Market",
          heading: "Read a social media post.",
          body: [
            "This week, we're spotlighting Miller's Orchard, a family-run stall that has been part of our market for over a decade! Known for their crisp apples and homemade cider, the Millers grow everything on their own land just outside town using sustainable farming practices.",
            "Beyond apples, they also sell seasonal jams, pies, and dried fruit. Stop by their stall this Saturday to sample their new cinnamon apple butter, and don't forget to ask about their upcoming pick-your-own-apples event next month!"
          ],
          questions: [
            { id: 23, prompt: "What is the main purpose of the post?", options: ["To announce the market's new hours", "To highlight a vendor at the market", "To recruit new farmers for the market", "To advertise a cooking class"], answer: 1 },
            { id: 24, prompt: "How long has Miller's Orchard been part of the market?", options: ["A few months", "Over a decade", "Since last year", "Since the market opened"], answer: 1 },
            { id: 25, prompt: "What does the post suggest visitors do this Saturday?", options: ["Attend a cooking demonstration", "Sample a new product", "Meet the market organizers", "Sign up for a newsletter"], answer: 1 },
            { id: 26, prompt: "What can be inferred about the Millers' farming methods?", options: ["They rely mainly on imported produce.", "They use practices intended to protect the environment.", "They no longer grow apples themselves.", "They only sell products at wholesale prices."], answer: 1 }
          ]
        },

        {
          type: "shorttext",
          textKind: "email",
          title: "Email",
          heading: "Read an email.",
          meta: { to: "allstudents@fairmontu.edu", from: "library@fairmontu.edu", date: "09/01/2026", subject: "Library Renovation Update" },
          body: [
            "Dear Students,",
            "We want to update you on the ongoing renovation of the second floor of the university library. Construction is expected to continue through the end of October, and the second floor will remain closed to the public during this time.",
            "In the meantime, the first and third floors remain open with expanded seating, and study rooms can still be reserved online. We apologize for any inconvenience and appreciate your patience as we work to improve library facilities for everyone.",
            "Sincerely, University Library Staff"
          ],
          questions: [
            { id: 27, prompt: "What is the purpose of the email?", options: ["To announce the library's permanent closure", "To update students on a renovation project", "To invite students to a library event", "To request donations for new books"], answer: 1 },
            { id: 28, prompt: "Which floor is currently closed?", options: ["First floor", "Second floor", "Third floor", "All floors"], answer: 1 },
            { id: 29, prompt: "What can students still do during the renovation?", options: ["Reserve study rooms online", "Access the second floor by appointment", "Check out books from the second floor", "Attend classes on the second floor"], answer: 0 },
            { id: 30, prompt: "When is construction expected to end?", options: ["End of September", "End of October", "End of November", "End of the school year"], answer: 1 }
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
            { id: 31, prompt: "What is the passage mainly about?", options: ["A famous crime in New York City", "A psychological explanation for reluctance to help others", "Differences between online and offline behavior", "Techniques used in psychological experiments"], answer: 1 },
            { id: 32, prompt: "The word \"commotion\" in the first paragraph is closest in meaning to", options: ["disturbance", "silence", "agreement", "investigation"], answer: 0 },
            { id: 33, prompt: "Why did Darley and Latané conduct their experiments?", options: ["To determine how quickly people evacuate buildings", "To test whether the presence of others affects helping behavior", "To measure how loudly people cry for help", "To compare crime rates in different cities"], answer: 1 },
            { id: 34, prompt: "According to the passage, all of the following are true about diffusion of responsibility EXCEPT:", options: ["It occurs when people assume someone else will help.", "It was proposed by Darley and Latané.", "It makes individuals more likely to act alone.", "It can reduce the overall likelihood that anyone helps."], answer: 2 },
            { id: 35, prompt: "Why does the author mention online environments?", options: ["To suggest that the bystander effect only occurs in person", "To show that the bystander effect can appear in various settings", "To criticize how organizations train employees", "To provide an example of a setting without witnesses"], answer: 1 },
            { id: 36, prompt: "The word \"reluctant\" in the first paragraph is closest in meaning to", options: ["unwilling", "eager", "confused", "forgetful"], answer: 0 },
            { id: 37, prompt: "According to the passage, what is the first step in Darley and Latané's five-step model?", options: ["Deciding how to help", "Noticing the event", "Assuming responsibility", "Interpreting the event as an emergency"], answer: 1 },
            { id: 38, prompt: "What can be inferred about a bystander who notices an emergency but fails to interpret it as one?", options: ["They will still help immediately.", "They are unlikely to proceed to the next step of helping.", "They will call the police regardless.", "They are more likely than others to intervene."], answer: 1 },
            { id: 39, prompt: "Why does the author describe the five-step model in the passage?", options: ["To criticize Darley and Latané's original theory", "To explain in more detail how the bystander effect can occur", "To compare bystanders across different countries", "To argue that bystanders never help in emergencies"], answer: 1 },
            { id: 40, prompt: "According to the passage, all of the following are steps in the five-step model EXCEPT:", options: ["Noticing the event", "Reporting the event to the media", "Deciding how to help", "Assuming personal responsibility"], answer: 1 }
          ]
        },

        {
          type: "passage",
          heading: "Read an academic passage.",
          title: "How Plants Communicate",
          paragraphs: [
            "For a long time, plants were assumed to be passive organisms, incapable of responding meaningfully to their environment. Recent research, however, suggests that plants can detect and respond to signals from their surroundings, including chemical cues released by other plants.",
            "When certain plants are attacked by insects, they release volatile organic compounds into the air. Nearby plants that detect these compounds often respond by producing defensive chemicals of their own, even before they are attacked. This process allows neighboring plants to prepare for a potential threat.",
            "Plants also communicate below ground through networks of fungi that connect their root systems, sometimes called the 'wood wide web.' Through these fungal networks, plants can exchange nutrients and, according to some studies, transmit distress signals to warn neighboring plants of drought or disease.",
            "Skeptics caution that while evidence for plant signaling is compelling, the term 'communication' may overstate what is actually a passive chemical process rather than an intentional exchange of information. Nevertheless, the discovery of these interactions has changed how scientists understand plant behavior and ecosystem dynamics.",
            "Some researchers have begun exploring practical applications of these findings, such as breeding crops that respond more efficiently to warning signals from neighboring plants, potentially reducing the need for chemical pesticides."
          ],
          questions: [
            { id: 41, prompt: "What is the passage mainly about?", options: ["How plants defend themselves against drought", "Evidence that plants can respond to signals from other plants", "The history of plant biology research", "Why insects avoid certain plants"], answer: 1 },
            { id: 42, prompt: "The word \"volatile\" in the second paragraph is closest in meaning to", options: ["easily evaporating", "highly toxic", "extremely rare", "permanently fixed"], answer: 0 },
            { id: 43, prompt: "According to the passage, why do plants release volatile organic compounds?", options: ["To attract pollinators", "To signal danger to nearby plants", "To absorb more sunlight", "To increase soil nutrients"], answer: 1 },
            { id: 44, prompt: "What is the \"wood wide web\"?", options: ["A network of insects that damage plants", "A network of fungi connecting plant root systems", "A method farmers use to plant crops", "A type of chemical pesticide"], answer: 1 },
            { id: 45, prompt: "What can be inferred about plants that detect warning signals from neighbors?", options: ["They ignore the signals completely.", "They may begin producing defenses before being attacked.", "They stop producing chemical compounds.", "They immediately die from the exposure."], answer: 1 },
            { id: 46, prompt: "Why does the author mention skeptics in the fourth paragraph?", options: ["To argue that plant communication does not exist", "To present an alternative interpretation of the evidence", "To criticize the scientists who study plants", "To prove that fungi are harmful to plants"], answer: 1 },
            { id: 47, prompt: "According to the passage, all of the following are true about fungal networks EXCEPT:", options: ["They connect the root systems of different plants.", "They may allow plants to exchange nutrients.", "They can transmit distress signals about drought.", "They are used exclusively by insects."], answer: 3 },
            { id: 48, prompt: "What is a possible practical application of plant signaling research mentioned in the passage?", options: ["Creating pesticide-free zones in cities", "Breeding crops that respond better to warning signals", "Eliminating the need for soil in farming", "Preventing fungi from growing near crops"], answer: 1 },
            { id: 49, prompt: "Why does the author mention breeding crops that respond to warning signals?", options: ["To show a possible benefit of understanding plant communication", "To argue that current crops are inefficient", "To criticize modern farming practices", "To explain how pesticides are made"], answer: 0 },
            { id: 50, prompt: "The word \"compelling\" in the fourth paragraph is closest in meaning to", options: ["convincing", "confusing", "irrelevant", "minimal"], answer: 0 }
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
      timeLimitSeconds: 40 * 60,
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
          type: "shorttext",
          textKind: "notice",
          title: "Fairview Community Center",
          heading: "Read a notice.",
          body: [
            "Parking Lot Closure Notice",
            "The main parking lot will be closed for repaving from Monday through Thursday next week. Visitors are asked to use the overflow lot located behind the building or nearby street parking. We appreciate your patience during this improvement project."
          ],
          questions: [
            { id: 17, prompt: "What is the purpose of the notice?", options: ["To announce a new parking fee", "To inform visitors of a temporary parking lot closure", "To advertise a community event", "To request volunteers for a project"], answer: 1 },
            { id: 18, prompt: "Where should visitors park during the closure?", options: ["In the main lot", "In the overflow lot or on the street", "At a nearby shopping center", "They should not visit during this time"], answer: 1 },
            { id: 19, prompt: "How long will the parking lot be closed?", options: ["One day", "Monday through Thursday", "An entire month", "Only on weekends"], answer: 1 }
          ]
        },

        {
          type: "shorttext",
          textKind: "email",
          title: "Email",
          heading: "Read an email.",
          meta: { to: "j.reyes04@dmail.com", from: "hr@brightpath.co", date: "07/15/2026", subject: "Internship Offer – Next Steps" },
          body: [
            "Dear Ms. Reyes,",
            "Congratulations! We are pleased to confirm your internship offer for the Marketing Department, starting August 5th. Please complete the enclosed onboarding forms and return them by July 25th so that we can prepare your workstation and access credentials in time.",
            "If you have any questions before your start date, feel free to reach out to our HR team.",
            "Welcome aboard! Brightpath HR Team"
          ],
          questions: [
            { id: 20, prompt: "What is the purpose of the email?", options: ["To reject an internship application", "To confirm an internship offer and next steps", "To schedule a job interview", "To announce a company event"], answer: 1 },
            { id: 21, prompt: "What must Ms. Reyes do by July 25th?", options: ["Attend an orientation session", "Return onboarding forms", "Submit a resume", "Choose her department"], answer: 1 },
            { id: 22, prompt: "When does the internship begin?", options: ["July 15th", "July 25th", "August 5th", "August 25th"], answer: 2 }
          ]
        },

        {
          type: "shorttext",
          textKind: "social",
          title: "Maple Street Theater",
          heading: "Read a social media post.",
          body: [
            "Auditions for our fall production are happening this weekend, and we're looking for performers of all experience levels! Whether you've been on stage before or have always wanted to try, we'd love to see you there.",
            "No preparation is required—just bring your enthusiasm. We'll also be looking for volunteers to help with costumes, lighting, and set design, so even if performing isn't for you, there are plenty of ways to get involved. Auditions run Saturday and Sunday from 10 AM to 4 PM."
          ],
          questions: [
            { id: 23, prompt: "What is the main purpose of the post?", options: ["To review a recent play", "To announce auditions for a production", "To sell tickets to a show", "To introduce new theater staff"], answer: 1 },
            { id: 24, prompt: "What can be inferred about who may audition?", options: ["Only experienced performers may audition.", "Auditions are open to people of all experience levels.", "Only current members of the theater may attend.", "Auditions require a written application first."], answer: 1 },
            { id: 25, prompt: "What should performers bring to the audition, according to the post?", options: ["A prepared monologue", "A resume", "Enthusiasm", "A costume"], answer: 2 },
            { id: 26, prompt: "What other opportunity does the post mention besides performing?", options: ["Directing the play", "Volunteering with costumes, lighting, or set design", "Writing the script", "Selling tickets at the door"], answer: 1 }
          ]
        },

        {
          type: "shorttext",
          textKind: "notice",
          title: "Swift Tower Management Office",
          heading: "Read a notice.",
          body: [
            "Elevator Maintenance Notice",
            "Elevator B will be undergoing scheduled maintenance from 9 AM to 1 PM on Thursday. During this time, please use Elevator A or the stairwell located near the east entrance. We apologize for any inconvenience this may cause and thank you for your understanding."
          ],
          questions: [
            { id: 27, prompt: "What is the main purpose of the notice?", options: ["To announce a new elevator installation", "To inform tenants of scheduled elevator maintenance", "To report an elevator malfunction", "To request feedback about the building"], answer: 1 },
            { id: 28, prompt: "Which elevator will be affected by the maintenance?", options: ["Elevator A", "Elevator B", "Both elevators", "None, only the stairwell will close"], answer: 1 },
            { id: 29, prompt: "What alternative does the notice suggest?", options: ["Waiting until the next day", "Using Elevator A or the stairwell", "Parking on a different floor", "Contacting building security"], answer: 1 },
            { id: 30, prompt: "When will the maintenance take place?", options: ["All day Thursday", "9 AM to 1 PM Thursday", "Only in the evening", "Over the weekend"], answer: 1 }
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
            { id: 31, prompt: "What is the passage mainly about?", options: ["Differences between rural and urban energy use", "Why cities become warmer than surrounding areas and how to address it", "The history of urban planning", "How trees affect air quality"], answer: 1 },
            { id: 32, prompt: "The word \"evapotranspiration\" in the second paragraph is closest in meaning to", options: ["the process of plants releasing moisture into the air", "the absorption of sunlight by dark surfaces", "the removal of vegetation from cities", "the measurement of air quality"], answer: 0 },
            { id: 33, prompt: "Why does the author mention dark surfaces such as roads and rooftops?", options: ["To explain why cities require more streetlights", "To describe a cause of the urban heat island effect", "To argue that cities should be built without roads", "To compare construction materials used in different countries"], answer: 1 },
            { id: 34, prompt: "According to the passage, all of the following are true about urban heat islands EXCEPT:", options: ["They can increase energy demand.", "They pose greater health risks to elderly residents.", "They are most noticeable during winter mornings.", "They are worsened by the removal of vegetation."], answer: 2 },
            { id: 35, prompt: "Why does the author mention cities painting rooftops white?", options: ["To criticize the cost of green roofs", "To provide an example of a low-cost solution", "To argue that reflective materials are ineffective", "To explain how rooftops absorb heat"], answer: 1 },
            { id: 36, prompt: "The word \"meaningfully\" in the fourth paragraph is closest in meaning to", options: ["substantially", "barely", "temporarily", "accidentally"], answer: 0 },
            { id: 37, prompt: "According to the study mentioned in the passage, what did researchers find in Los Angeles neighborhoods?", options: ["Areas with more trees had higher temperatures.", "Areas with more tree cover had lower surface temperatures.", "Tree cover made no difference in temperature.", "All neighborhoods had identical temperatures regardless of vegetation."], answer: 1 },
            { id: 38, prompt: "What can be inferred about strategic tree planting, according to the passage?", options: ["It is more expensive than other cooling methods.", "It could be a cost-effective way to reduce urban heat.", "It has no measurable effect on temperature.", "It is only effective in rural areas."], answer: 1 },
            { id: 39, prompt: "Why does the author mention the Los Angeles study?", options: ["To criticize the city's urban planning", "To provide evidence supporting tree planting as a cooling strategy", "To compare Los Angeles to other cities", "To explain how trees absorb carbon dioxide"], answer: 1 },
            { id: 40, prompt: "According to the passage, all of the following are proposed solutions to urban heat islands EXCEPT:", options: ["Green roofs", "Increased tree cover", "Reflective building materials", "Removing public parks"], answer: 3 }
          ]
        },

        {
          type: "passage",
          heading: "Read an academic passage.",
          title: "The Placebo Effect",
          paragraphs: [
            "A placebo is a substance or treatment that has no active therapeutic effect, yet patients who receive it sometimes report genuine improvements in their symptoms. This phenomenon, known as the placebo effect, has puzzled researchers for decades and raises important questions about the relationship between the mind and the body.",
            "Placebo effects are frequently observed in clinical trials, where one group of participants receives an actual medication while another receives an inactive substance, such as a sugar pill. Remarkably, participants in the placebo group often experience real reductions in pain, anxiety, or other symptoms, despite having received no active treatment.",
            "Researchers believe that expectation plays a central role in the placebo effect. When patients believe that a treatment will help them, their brains may release natural chemicals, such as endorphins, that produce real physiological changes. In this sense, the mind's expectations can directly influence the body's response.",
            "The placebo effect has significant implications for medical research. Because it can be difficult to distinguish between a treatment's actual effect and a placebo effect, most modern clinical trials are designed as double-blind studies, in which neither participants nor researchers know who is receiving the real treatment.",
            "Interestingly, some studies have found that placebo effects can occur even when patients are told they are receiving a placebo, a phenomenon known as the 'open-label placebo effect.' This suggests that the ritual of treatment itself, rather than simply the belief in an active drug, may contribute to symptom improvement."
          ],
          questions: [
            { id: 41, prompt: "What is the passage mainly about?", options: ["How clinical trials are conducted", "The phenomenon of the placebo effect and its causes", "The chemical composition of sugar pills", "Why patients distrust modern medicine"], answer: 1 },
            { id: 42, prompt: "The word \"genuine\" in the first paragraph is closest in meaning to", options: ["real", "imagined", "temporary", "unlikely"], answer: 0 },
            { id: 43, prompt: "According to the passage, what happens to some participants in the placebo group during clinical trials?", options: ["They receive a stronger dose of medication.", "They experience real reductions in symptoms.", "They are removed from the study.", "They report no change in their condition."], answer: 1 },
            { id: 44, prompt: "According to the passage, what role does expectation play in the placebo effect?", options: ["It has no measurable effect on the body.", "It may trigger the release of natural chemicals that produce real changes.", "It only affects patients with anxiety disorders.", "It prevents the body from healing."], answer: 1 },
            { id: 45, prompt: "Why are double-blind studies used in clinical trials, according to the passage?", options: ["To make the study faster to complete", "To prevent expectations from influencing the results", "To increase the cost-effectiveness of the study", "To ensure all participants receive the same medication"], answer: 1 },
            { id: 46, prompt: "What can be inferred about the \"open-label placebo effect\"?", options: ["It only occurs when patients are deceived about their treatment.", "It suggests that belief in an active drug is the only cause of placebo effects.", "It shows that placebo effects can occur even when patients know they are receiving a placebo.", "It proves that placebos have an active chemical ingredient."], answer: 2 },
            { id: 47, prompt: "Why does the author mention endorphins in the third paragraph?", options: ["To describe a chemical used to make placebo pills", "To provide a possible biological explanation for the placebo effect", "To argue that placebos are dangerous", "To criticize modern medicine"], answer: 1 },
            { id: 48, prompt: "According to the passage, all of the following are true about the placebo effect EXCEPT:", options: ["It can occur without an active treatment.", "It may be influenced by patient expectations.", "It always requires patients to be unaware they are receiving a placebo.", "It has led to changes in how clinical trials are designed."], answer: 2 },
            { id: 49, prompt: "The word \"ritual\" in the fifth paragraph is closest in meaning to", options: ["a repeated practice or procedure", "a chemical reaction", "a legal requirement", "a scientific measurement"], answer: 0 },
            { id: 50, prompt: "Why does the author discuss the open-label placebo effect in the final paragraph?", options: ["To disprove the existence of the placebo effect", "To suggest that the placebo effect can occur through means other than belief in an active drug", "To argue that all clinical trials should stop using placebos", "To criticize doctors who use placebos"], answer: 1 }
          ]
        }
      ]
    }
  ]
};
