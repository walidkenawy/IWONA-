import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            experience: 'Experience',
            rituals: 'Rituals',
            shop: 'Shop',
            cart: 'Cart',
            wishlist: 'Wishlist'
          },
          story: {
            back: 'Back to Sanctuary',
            genesis: 'Our Genesis',
            title: 'The Alchemy of',
            titleItalic: 'Soulful Transformation',
            p1: 'SPA FOR SOUL was founded in 2018 in the heart of Warsaw, born from a singular vision: to create a bridge between the ancient wisdom of somatic healing and the modern pursuit of absolute excellence.',
            p2: 'We believe that the body is not just a vessel, but a sacred instrument. When this instrument is out of tune, our reality becomes fragmented. Our mission is to provide the frequency, the touch, and the space for you to return to your natural state of harmony.',
            p3: 'Our founder, a master of somatic alchemy and energy architecture, spent a decade traveling the world—from the high ashrams of the Himalayas to the cutting-edge longevity clinics of Switzerland—to synthesize a unique methodology that addresses the human experience at every level.',
            p4: 'Today, we are more than a spa. We are a sanctuary for the high-achiever, the creative visionary, and the seeker who demands both luxury and depth.',
            quote: 'We don\'t just heal the body; we awaken the architect of your destiny.',
            cta: 'Explore Our Rituals',
            values: {
              purity: { title: 'Purity', desc: 'Only the rarest, most potent botanical extracts.' },
              intention: { title: 'Intention', desc: 'Every ritual is infused with specific energetic signatures.' },
              privacy: { title: 'Privacy', desc: 'Absolute discretion for our elite community.' },
              impact: { title: 'Impact', desc: 'Transformation that ripples into every area of life.' }
            }
          },
          servicesPage: {
            back: 'Back to Sanctuary',
            subtitle: 'The Full Menu',
            title: 'Sacred',
            titleItalic: 'Offerings',
            desc: 'Each ritual is a bespoke journey tailored to your current energetic state. We combine ancient alchemy with modern science to deliver profound results.',
            duration: 'Duration & Investment',
            benefits: 'Key Benefits',
            request: 'Request This Ritual',
            membership: {
              title: 'Custom Architectural Plans',
              desc: 'For those seeking absolute sovereignty, we offer bespoke monthly retainers that include weekly somatic sessions, personalized apothecary supplies, and 24/7 spiritual advisory.',
              cta: 'Inquire About Membership'
            }
          },
          hero: {
            subtitle: 'The Sanctuary of Transformation',
            title: 'Awaken Your',
            titleItalic: 'Divine Essence',
            cta: 'Begin the Ritual'
          },
          about: {
            philosophy: 'Our Philosophy',
            title: 'More than a brand.',
            titleItalic: 'A Movement of the Soul.',
            p1: 'SPA FOR SOUL was born from the belief that true beauty is an external reflection of internal alignment. We don\'t just offer services; we facilitate rituals that bridge the gap between the physical and the divine.',
            p2: 'Our approach blends ancient wisdom with modern luxury, creating a sanctuary for those who seek not just relaxation, but deep, lasting transformation. Every touch, every scent, and every movement is curated to awaken the dormant power within you.',
            quote: 'We invite you to stop existing and start becoming.',
            cta: 'Learn Our Story'
          },
          rituals: {
            subtitle: 'The Sacred Rituals',
            title: 'Curated',
            titleItalic: 'Journeys',
            viewDetails: 'View Details',
            hideDetails: 'Hide Details',
            beginJourney: 'Begin Your Journey',
            fullRitual: 'The Full Ritual',
            items: {
              s1: {
                title: 'The Healer: Somatic Alchemy',
                description: 'A deep restorative journey where the healer uses intuitive touch and sacred oils to release ancestral tension and restore the body\'s natural crystalline frequency.',
                longDescription: 'This ritual begins with a diagnostic scent invocation, identifying areas of energetic blockage. Using a combination of myofascial release, lymphatic drainage, and intuitive energy work, the healer works to dissolve physical manifestations of emotional trauma. Sacred oils, infused with high-frequency botanicals, are applied to key meridian points to anchor the healing. The session concludes with a golden aura sealing, protecting your newly restored crystalline frequency.',
                steps: ['SCENT INVOCATION', 'NERVOUS SYSTEM RESET', 'DEEP TISSUE ALCHEMY', 'GOLDEN AURA SEALING']
              },
              s2: {
                title: 'The Shaman: Spirit Flight',
                description: 'A rhythmic ritual of breath and movement. Enter a trance state to communicate with your higher self, shedding old skins and reclaiming your primal power.',
                longDescription: 'The Spirit Flight is a transformative journey into the subconscious. We begin with a ceremonial cacao invocation to open the heart space. Through guided primal breathwork, you will bypass the analytical mind and enter a state of expanded consciousness. Ecstatic soul dance allows the body to express and release stored energies, while integration silence provides the space for profound insights and spiritual reclamation. This is a ritual of shedding the old and birthing the new.',
                steps: ['CACAO INVOCATION', 'PRIMAL BREATHWORK', 'ECSTATIC SOUL DANCE', 'INTEGRATION SILENCE']
              },
              s3: {
                title: 'The Coach: Destiny Architecture',
                description: 'Strategic soul-alignment sessions. Your trainer acts as a mirror and architect, helping you dismantle limiting structures and design a life of absolute sovereignty.',
                longDescription: 'Destiny Architecture is for those ready to consciously design their reality. We start with shadow mapping, identifying the hidden beliefs and patterns that have dictated your choices. Through belief deconstruction, we dismantle these limiting structures. We then move into sovereignty strategy, defining your true desires and aligning your actions with your highest purpose. The final legacy blueprint provides a practical and spiritual roadmap for manifesting a life of absolute sovereignty and impact.',
                steps: ['SHADOW MAPPING', 'BELIEF DECONSTRUCTION', 'SOVEREIGNTY STRATEGY', 'LEGACY BLUEPRINT']
              },
              s4: {
                title: 'The Dancer: Shakti Flow',
                description: 'A sacred movement practice to awaken the divine feminine energy. Through fluid dance and conscious breath, reconnect with your creative power and sensual essence.',
                longDescription: 'Shakti Dance is the yoga of dance. This ritual begins with rhythmic breathing to activate the kundalini energy. We then move into fluid, organic movements that follow the natural flow of your body\'s energy centers. As the music intensifies, you will enter a state of ecstatic expression, releasing inhibitions and reclaiming your radiant essence. The journey concludes with a deep restorative relaxation, allowing the awakened Shakti energy to integrate and nourish your entire being.',
                steps: ['KUNDALINI ACTIVATION', 'FLUID FLOW', 'ECSTATIC EXPRESSION', 'SHAKTI INTEGRATION']
              },
              s5: {
                title: 'The Angel: Angel Touch',
                description: 'A celestial massage experience that transcends the physical. Soft, ethereal strokes combined with high-vibrational energy work to lift your spirit and soothe your soul.',
                longDescription: 'The Angel Touch is our most delicate yet profound massage ritual. It begins with a celestial misting of white rose and frankincense to clear your energetic field. Using feather-light strokes and specialized hand placements, the practitioner works with the subtle energy bodies to release deep-seated emotional blockages. This ritual is designed to make you feel weightless, as if being held by divine presence. It concludes with a crystal sound bath to anchor the high-vibrational state into your physical cells.',
                steps: ['CELESTIAL MISTING', 'ETHEREAL STROKES', 'ENERGY ALIGNMENT', 'CRYSTAL SOUND BATH']
              }
            }
          },
          shop: {
            subtitle: 'The Collection',
            title: 'Luxury',
            titleItalic: 'Apothecary',
            searchPlaceholder: 'Search rituals...',
            noResults: 'No rituals found matching your search.',
            clearSearch: 'Clear Search',
            addToRitual: 'Add to Ritual',
            added: 'Added',
            categories: {
              all: 'All',
              skincare: 'Skincare',
              haircare: 'Haircare',
              perfume: 'Perfume'
            },
            items: {
              p1: {
                name: 'Midnight Bloom',
                description: 'A dark, mysterious fragrance that evokes the essence of the night jasmine and rare oud. A ritual in every spray.',
                notes: ['Night Jasmine', 'Black Oud', 'Saffron', 'Amber']
              },
              p2: {
                name: 'Divine Glow Serum',
                description: 'Infused with 24k gold flakes and rare botanical extracts to awaken your skin\'s natural radiance.',
                benefits: ['Intense Hydration', 'Cellular Renewal', 'Luminous Finish']
              },
              p3: {
                name: 'Sacred Silk Oil',
                description: 'A lightweight yet powerful treatment that restores strength and vitality to every strand.',
                benefits: ['Heat Protection', 'Deep Nourishment', 'Weightless Shine']
              },
              p4: {
                name: 'Solaris Essence',
                description: 'The warmth of the sun captured in a bottle. Bright citrus notes balanced by deep sandalwood.',
                notes: ['Bergamot', 'Neroli', 'Sandalwood', 'White Musk']
              }
            },
            bundle: {
              subtitle: 'Exclusive Ritual',
              title: 'The',
              titleItalic: 'Midnight Awakening',
              titleSuffix: 'Bundle',
              desc: 'A curated selection of our most potent tools. Includes the Midnight Bloom Parfum, Divine Glow Serum, and a private 90-minute Soul Dance session.',
              value: 'Value',
              cta: 'Acquire the Ritual'
            }
          },
          journey: {
            subtitle: 'The Experience Journey',
            title: 'A Ceremony of',
            titleItalic: 'Self',
            steps: {
              0: { title: 'Arrival', description: 'Enter the sanctuary. Shed the weight of the outside world.' },
              1: { title: 'Relaxation', description: 'Breath synchronization and sensory alignment.' },
              2: { title: 'Release', description: 'The core ritual. Deep somatic and energetic cleansing.' },
              3: { title: 'Awakening', description: 'Integration of new energy and cellular activation.' },
              4: { title: 'Integration', description: 'Return to the world, elevated and transformed.' }
            }
          },
          testimonials: {
            title: 'Voices of Transformation',
            items: {
              t1: {
                quote: 'The SPA FOR SOUL experience is not just a service; it\'s a rebirth. I arrived fragmented and left whole, carrying the scent of Midnight Bloom like a shield of power.',
                author: 'Elena Vance',
                role: 'Creative Director'
              },
              t2: {
                quote: 'Rarely do you find a brand that understands the intersection of luxury and deep spiritual work. The self-development sessions have been life-altering.',
                author: 'Julian Thorne',
                role: 'Entrepreneur'
              }
            }
          },
          footer: {
            tagline: 'The Sanctuary of Transformation',
            newsletter: {
              title: 'Join the Circle',
              desc: 'Receive invitations to private rituals and early access to new collections.',
              placeholder: 'Your Email',
              cta: 'Subscribe'
            },
            links: {
              title: 'Navigation',
              home: 'Home',
              experience: 'Experience',
              rituals: 'Rituals',
              shop: 'Shop'
            },
            contact: {
              title: 'Contact',
              address: 'Ulica Jana Kilińskiego 21',
              email: 'info@iwonarybinska.com',
              phone: '+48 504 009 567'
            },
            legal: '© 2026 SPA FOR SOUL. All rights reserved.'
          },
          cart: {
            title: 'Your Ritual Bag',
            empty: 'Your bag is empty.',
            total: 'Total',
            checkout: 'Proceed to Checkout'
          },
          wishlist: {
            title: 'Your',
            titleItalic: 'Wishlist',
            itemsSaved: 'Items Saved',
            empty: 'Your wishlist is empty',
            emptyDesc: 'Save your favorite rituals to find them later.',
            explore: 'Explore Shop',
            moveToCart: 'Move to Ritual'
          },
          booking: {
            subtitle: 'Invitation Only',
            title: 'Apply for a',
            titleItalic: 'Private Session',
            description: 'Our experiences are limited to ensure the highest level of presence and care. Please share your intention below.',
            name: 'Full Name',
            namePlaceholder: 'Your Name',
            email: 'Email Address',
            emailPlaceholder: 'email@luxury.com',
            experience: 'Desired Experience',
            intention: 'Your Intention',
            intentionPlaceholder: 'What are you seeking to transform?',
            submit: 'Submit Application',
            options: {
              healer: 'The Healer: Somatic Alchemy',
              shaman: 'The Shaman: Spirit Flight',
              coach: 'The Coach: Destiny Architecture',
              dancer: 'The Dancer: Shakti Flow',
              angel: 'The Angel: Angel Touch',
              bundle: 'The Ritual Collection (Full Bundle)'
            }
          }
        }
      },
      pl: {
        translation: {
          nav: {
            home: 'Główna',
            experience: 'Doświadczenie',
            rituals: 'Rytuały',
            shop: 'Sklep',
            cart: 'Koszyk',
            wishlist: 'Lista Życzeń'
          },
          story: {
            back: 'Powrót do Sanktuarium',
            genesis: 'Nasza Geneza',
            title: 'Alchemia',
            titleItalic: 'Duchowej Transformacji',
            p1: 'SPA FOR SOUL powstało w 2018 roku w sercu Warszawy, zrodzone z jednej wizji: stworzenia mostu między starożytną mądrością uzdrawiania somatycznego a nowoczesnym dążeniem do absolutnej doskonałości.',
            p2: 'Wierzymy, że ciało to nie tylko naczynie, ale święty instrument. Gdy ten instrument jest rozstrojony, nasza rzeczywistość staje się fragmentaryczna. Naszą misją jest zapewnienie częstotliwości, dotyku i przestrzeni, abyś mógł powrócić do swojego naturalnego stanu harmonii.',
            p3: 'Nasz założyciel, mistrz alchemii somatycznej i architektury energetycznej, spędził dekadę podróżując po świecie — od wysokich aśramów Himalajów po najnowocześniejsze kliniki długowieczności w Szwajcarii — aby zsyntetyzować unikalną metodologię, która adresuje ludzkie doświadczenie na każdym poziomie.',
            p4: 'Dziś jesteśmy czymś więcej niż spa. Jesteśmy sanktuarium dla ludzi sukcesu, kreatywnych wizjonerów i poszukiwaczy, którzy wymagają zarówno luksusu, jak i głębi.',
            quote: 'Nie tylko uzdrawiamy ciało; budzimy architekta Twojego przeznaczenia.',
            cta: 'Poznaj Nasze Rytuały',
            values: {
              purity: { title: 'Czystość', desc: 'Tylko najrzadsze, najsilniejsze ekstrakty roślinne.' },
              intention: { title: 'Intencja', desc: 'Każdy rytuał jest nasycony specyficznymi sygnaturami energetycznymi.' },
              privacy: { title: 'Prywatność', desc: 'Absolutna dyskrecja dla naszej elitarnej społeczności.' },
              impact: { title: 'Wpływ', desc: 'Transformacja, która przenika do każdej dziedziny życia.' }
            }
          },
          servicesPage: {
            back: 'Powrót do Sanktuarium',
            subtitle: 'Pełne Menu',
            title: 'Święte',
            titleItalic: 'Oferty',
            desc: 'Każdy rytuał to spersonalizowana podróż dostosowana do Twojego aktualnego stanu energetycznego. Łączymy starożytną alchemię z nowoczesną nauką, aby zapewnić głębokie rezultaty.',
            duration: 'Czas i Inwestycja',
            benefits: 'Kluczowe Korzyści',
            request: 'Poproś o Ten Rytuał',
            membership: {
              title: 'Niestandardowe Plany Architektoniczne',
              desc: 'Dla tych, którzy szukają absolutnej suwerenności, oferujemy spersonalizowane miesięczne abonamenty, które obejmują cotygodniowe sesje somatyczne, spersonalizowane zapasy apteczne i całodobowe doradztwo duchowe.',
              cta: 'Zapytaj o Członkostwo'
            }
          },
          hero: {
            subtitle: 'Sanktuarium Transformacji',
            title: 'Obudź Swoją',
            titleItalic: 'Boską Esencję',
            cta: 'Rozpocznij Rytuał'
          },
          about: {
            philosophy: 'Nasza Filozofia',
            title: 'Więcej niż marka.',
            titleItalic: 'Ruch Duszy.',
            p1: 'SPA FOR SOUL zrodziło się z przekonania, że prawdziwe piękno jest zewnętrznym odzwierciedleniem wewnętrznej harmonii. Nie oferujemy tylko usług; ułatwiamy rytuały, które wypełniają lukę między tym, co fizyczne, a tym, co boskie.',
            p2: 'Nasze podejście łączy starożytną mądrość z nowoczesnym luksusem, tworząc sanktuarium dla tych, którzy szukają nie tylko relaksu, ale głębokiej, trwałej transformacji. Każdy dotyk, każdy zapach i każdy ruch jest kuratorem przebudzenia uśpionej mocy w Tobie.',
            quote: 'Zapraszamy Cię, byś przestał istnieć i zaczął się stawać.',
            cta: 'Poznaj Naszą Historię'
          },
          rituals: {
            subtitle: 'Święte Rytuały',
            title: 'Starannie Dobrane',
            titleItalic: 'Podróże',
            viewDetails: 'Zobacz Szczegóły',
            hideDetails: 'Ukryj Szczegóły',
            beginJourney: 'Rozpocznij Podróż',
            fullRitual: 'Pełny Rytuał',
            items: {
              s1: {
                title: 'Uzdrowiciel: Alchemia Somatyczna',
                description: 'Głęboka podróż regenerująca, w której uzdrowiciel wykorzystuje intuicyjny dotyk i święte oleje, aby uwolnić napięcie przodków i przywrócić naturalną krystaliczną częstotliwość ciała.',
                longDescription: 'Rytuał ten rozpoczyna się od diagnostycznego wezwania zapachu, identyfikującego obszary blokady energetycznej. Wykorzystując kombinację uwalniania mięśniowo-powięziowego, drenażu limfatycznego i intuicyjnej pracy z energią, uzdrowiciel pracuje nad rozpuszczeniem fizycznych manifestacji traumy emocjonalnej. Święte oleje, nasycone wysokoczęstotliwościowymi składnikami roślinnymi, są nakładane na kluczowe punkty meridianowe, aby zakotwiczyć uzdrowienie. Sesja kończy się uszczelnieniem złotej aury, chroniąc Twoją nowo przywróconą krystaliczną częstotliwość.',
                steps: ['WEZWANIE ZAPACHU', 'RESET UKŁADU NERWOWEGO', 'ALCHEMIA TKANEK GŁĘBOKICH', 'USZCZELNIENIE ZŁOTEJ AURY']
              },
              s2: {
                title: 'Szaman: Lot Ducha',
                description: 'Rytmiczny rytuał oddechu i ruchu. Wejdź w stan transu, aby komunikować się ze swoim wyższym ja, zrzucając starą skórę i odzyskując swoją pierwotną moc.',
                longDescription: 'Lot Ducha to transformująca podróż w podświadomość. Zaczynamy od ceremonialnego wezwania kakao, aby otworzyć przestrzeń serca. Poprzez prowadzony pierwotny oddech, ominiesz analityczny umysł i wejdziesz w stan rozszerzonej świadomości. Ekstatyczny taniec duszy pozwala ciału wyrazić i uwolnić zmagazynowane energie, podczas gdy cisza integracyjna zapewnia przestrzeń dla głębokich wglądów i duchowego odzyskania. To rytuał zrzucania starego i rodzenia nowego.',
                steps: ['WEZWANIE KAKAO', 'PIERWOTNY ODDECH', 'EKSTATYCZNY TANIEC DUSZY', 'CISZA INTEGRACYJNA']
              },
              s3: {
                title: 'Trener: Architektura Przeznaczenia',
                description: 'Strategiczne sesje dopasowania duszy. Twój trener działa jako lustro i architekt, pomagając Ci zdemontować ograniczające struktury i zaprojektować życie w absolutnej suwerenności.',
                longDescription: 'Architektura Przeznaczenia jest dla tych, którzy są gotowi świadomie projektować swoją rzeczywistość. Zaczynamy od mapowania cienia, identyfikując ukryte przekonania i wzorce, które dyktowały Twoje wybory. Poprzez dekonstrukcję przekonań, demontujemy te ograniczające struktury. Następnie przechodzimy do strategii suwerenności, definiując Twoje prawdziwe pragnienia i dopasowując Twoje działania do Twojego najwyższego celu. Końcowy plan dziedzictwa zapewnia praktyczną i duchową mapę drogową do manifestowania życia w absolutnej suwerenności i wpływie.',
                steps: ['MAPOWANIE CIENIA', 'DEKONSTRUKCJA PRZEKONAŃ', 'STRATEGIA SUWERENNOŚCI', 'PLAN DZIEDZICTWA']
              },
              s4: {
                title: 'Tancerka: Przepływ Shakti',
                description: 'Święta praktyka ruchu, aby obudzić boską energię żeńską. Poprzez płynny taniec i świadomy oddech, połącz się ponownie ze swoją kreatywną mocą i zmysłową esencją.',
                longDescription: 'Shakti Dance to joga tańca. Rytuał ten rozpoczyna się od rytmicznego oddychania, aby aktywować energię kundalini. Następnie przechodzimy do płynnych, organicznych ruchów, które podążają za naturalnym przepływem centrów energetycznych Twojego ciała. Gdy muzyka przybiera na sile, wejdziesz w stan ekstatycznej ekspresji, uwalniając zahamowania i odzyskując swoją promienną esencję. Podróż kończy się głębokim relaksem regenerującym, pozwalającym przebudzonej energii Shakti zintegrować się i odżywić całą Twoją istotę.',
                steps: ['AKTYWACJA KUNDALINI', 'PŁYNNY PRZEPŁYW', 'EKSTATYCZNA EKSPRESJA', 'INTEGRACJA SHAKTI']
              },
              s5: {
                title: 'Anioł: Dotyk Anioła',
                description: 'Niebiańskie doświadczenie masażu, które wykracza poza sferę fizyczną. Miękkie, eteryczne pociągnięcia połączone z pracą z energią o wysokiej wibracji, aby unieść Twojego ducha i ukoić duszę.',
                longDescription: 'Dotyk Anioła to nasz najdelikatniejszy, a zarazem najgłębszy rytuał masażu. Rozpoczyna się niebiańską mgiełką z białej róży i kadzidła, aby oczyścić Twoje pole energetyczne. Używając lekkich jak piórko pociągnięć i specjalistycznych ułożeń dłoni, praktyk pracujący z subtelnymi ciałami energetycznymi uwalnia głęboko zakorzenione blokady emocjonalne. Rytuał ten został zaprojektowany tak, abyś poczuł się nieważki, jakbyś był trzymany przez boską obecność. Kończy się kąpielą w dźwiękach kryształów, aby zakotwiczyć stan wysokiej wibracji w Twoich fizycznych komórkach.',
                steps: ['NIEBIAŃSKA MGIEŁKA', 'ETERYCZNE POCIĄGNIĘCIA', 'DOPASOWANIE ENERGETYCZNE', 'KĄPIEL W DŹWIĘKACH KRYSZTAŁÓW']
              }
            }
          },
          shop: {
            subtitle: 'Kolekcja',
            title: 'Luksusowa',
            titleItalic: 'Apteka',
            searchPlaceholder: 'Szukaj rytuałów...',
            noResults: 'Nie znaleziono rytuałów pasujących do wyszukiwania.',
            clearSearch: 'Wyczyść Wyszukiwanie',
            addToRitual: 'Dodaj do Rytuału',
            added: 'Dodano',
            categories: {
              all: 'Wszystkie',
              skincare: 'Pielęgnacja Skóry',
              haircare: 'Pielęgnacja Włosów',
              perfume: 'Perfumy'
            },
            items: {
              p1: {
                name: 'Midnight Bloom',
                description: 'Ciemny, tajemniczy zapach, który przywołuje esencję nocnego jaśminu i rzadkiego oudu. Rytuał w każdym sprayu.',
                notes: ['Nocny Jaśmin', 'Czarny Oud', 'Szafran', 'Bursztyn']
              },
              p2: {
                name: 'Divine Glow Serum',
                description: 'Nasycone płatkami 24-karatowego złota i rzadkimi ekstraktami roślinnymi, aby obudzić naturalny blask Twojej skóry.',
                benefits: ['Intensywne Nawilżenie', 'Odnowa Komórkowa', 'Świetliste Wykończenie']
              },
              p3: {
                name: 'Sacred Silk Oil',
                description: 'Lekka, ale potężna kuracja, która przywraca siłę i witalność każdemu pasmu.',
                benefits: ['Ochrona Przed Ciepłem', 'Głębokie Odżywienie', 'Lekki Blask']
              },
              p4: {
                name: 'Solaris Essence',
                description: 'Ciepło słońca zamknięte w butelce. Jasne cytrusowe nuty zrównoważone głębokim sandałowcem.',
                notes: ['Bergamotka', 'Neroli', 'Sandałowiec', 'Białe Piżmo']
              }
            },
            bundle: {
              subtitle: 'Ekskluzywny Rytuał',
              title: 'Zestaw',
              titleItalic: 'Północne Przebudzenie',
              titleSuffix: '',
              desc: 'Starannie dobrany wybór naszych najpotężniejszych narzędzi. Zawiera perfumy Midnight Bloom, serum Divine Glow oraz prywatną 90-minutową sesję Soul Dance.',
              value: 'Wartość',
              cta: 'Zdobądź Rytuał'
            }
          },
          journey: {
            subtitle: 'Podróż Doświadczenia',
            title: 'Ceremonia',
            titleItalic: 'Siebie',
            steps: {
              0: { title: 'Przybycie', description: 'Wejdź do sanktuarium. Zrzuć ciężar świata zewnętrznego.' },
              1: { title: 'Relaksacja', description: 'Synchronizacja oddechu i dopasowanie zmysłowe.' },
              2: { title: 'Uwolnienie', description: 'Rdzeń rytuału. Głębokie oczyszczanie somatyczne i energetyczne.' },
              3: { title: 'Przebudzenie', description: 'Integracja nowej energii i aktywacja komórkowa.' },
              4: { title: 'Integracja', description: 'Powrót do świata, wzniesiony i odmieniony.' }
            }
          },
          testimonials: {
            title: 'Głosy Transformacji',
            items: {
              t1: {
                quote: 'Doświadczenie SPA FOR SOUL to nie tylko usługa; to odrodzenie. Przybyłam rozbita, a wyjechałam cała, niosąc zapach Midnight Bloom jak tarczę mocy.',
                author: 'Elena Vance',
                role: 'Dyrektor Kreatywna'
              },
              t2: {
                quote: 'Rzadko zdarza się znaleźć markę, która rozumie punkt styku luksusu i głębokiej pracy duchowej. Sesje samorozwoju zmieniły moje życie.',
                author: 'Julian Thorne',
                role: 'Przedsiębiorca'
              }
            }
          },
          footer: {
            tagline: 'Sanktuarium Transformacji',
            newsletter: {
              title: 'Dołącz do Kręgu',
              desc: 'Otrzymuj zaproszenia na prywatne rytuały i wczesny dostęp do nowych kolekcji.',
              placeholder: 'Twój Email',
              cta: 'Subskrybuj'
            },
            links: {
              title: 'Nawigacja',
              home: 'Główna',
              experience: 'Doświadczenie',
              rituals: 'Rytuały',
              shop: 'Sklep'
            },
            contact: {
              title: 'Kontakt',
              address: 'Ulica Jana Kilińskiego 21',
              email: 'info@iwonarybinska.com',
              phone: '+48 504 009 567'
            },
            legal: '© 2026 SPA FOR SOUL. Wszelkie prawa zastrzeżone.'
          },
          cart: {
            title: 'Twój Koszyk Rytuałów',
            empty: 'Twój koszyk jest pusty.',
            total: 'Suma',
            checkout: 'Przejdź do Płatności'
          },
          wishlist: {
            title: 'Twoja',
            titleItalic: 'Lista Życzeń',
            itemsSaved: 'Zapisane Przedmioty',
            empty: 'Twoja lista życzeń jest pusta',
            emptyDesc: 'Zapisz swoje ulubione rytuały, aby znaleźć je później.',
            explore: 'Eksploruj Sklep',
            moveToCart: 'Przenieś do Rytuału'
          },
          booking: {
            subtitle: 'Tylko na Zaproszenie',
            title: 'Zgłoś się na',
            titleItalic: 'Prywatną Sesję',
            description: 'Nasze doświadczenia są ograniczone, aby zapewnić najwyższy poziom obecności i opieki. Podziel się swoją intencją poniżej.',
            name: 'Imię i Nazwisko',
            namePlaceholder: 'Twoje Imię',
            email: 'Adres Email',
            emailPlaceholder: 'email@luxury.com',
            experience: 'Pożądane Doświadczenie',
            intention: 'Twoja Intencja',
            intentionPlaceholder: 'Co chcesz przetransformować?',
            submit: 'Wyślij Zgłoszenie',
            options: {
              healer: 'Uzdrowiciel: Alchemia Somatyczna',
              shaman: 'Szaman: Lot Ducha',
              coach: 'Trener: Architektura Przeznaczenia',
              dancer: 'Tancerka: Przepływ Shakti',
              angel: 'Anioł: Dotyk Anioła',
              bundle: 'Kolekcja Rytualna (Pełny Zestaw)'
            }
          }
        }
      }
    }
  });

export default i18n;
