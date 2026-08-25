export const feelingsCategories = [
  {
    type: 'positive',
    superSectionTitle: 'Uplifting Feelings',
    groups: [
      {
        title: 'Joy & Celebration',
        moods: [
          { key: 'joyful', label: 'Joyful' },
          { key: 'excited', label: 'Excited' },
          { key: 'victorious', label: 'Victorious' }
        ]
      },
      {
        title: 'Gratitude & Awe',
        moods: [
          { key: 'thankful', label: 'Thankful' },
          { key: 'blessed', label: 'Blessed' },
          { key: 'amazed', label: 'Amazed' }
        ]
      },
      {
        title: 'Peace & Contentment',
        moods: [
          { key: 'peaceful', label: 'Peaceful' },
          { key: 'content', label: 'Content' },
          { key: 'safe', label: 'Safe' }
        ]
      },
      {
        title: 'Love & Connection',
        moods: [
          { key: 'loved', label: 'Loved' },
          { key: 'loving', label: 'Loving' },
          { key: 'forgiven', label: 'Forgiven' }
        ]
      },
      {
        title: 'Hope & Inspiration',
        moods: [
          { key: 'hopeful', label: 'Hopeful' },
          { key: 'inspired', label: 'Inspired' },
          { key: 'confident', label: 'Confident' }
        ]
      }
    ]
  },
  {
    type: 'negative',
    superSectionTitle: 'Heavy Feelings',
    groups: [
      {
        title: 'Fear & Uncertainty',
        moods: [
          { key: 'anxious', label: 'Anxious' },
          { key: 'afraid', label: 'Afraid' },
          { key: 'doubtful', label: 'Doubtful' }
        ]
      },
      {
        title: 'Sorrow & Grief',
        moods: [
          { key: 'sad', label: 'Sad' },
          { key: 'heartbroken', label: 'Heartbroken' },
          { key: 'grieving', label: 'Grieving' }
        ]
      },
      {
        title: 'Anger & Hurt',
        moods: [
          { key: 'angry', label: 'Angry' },
          { key: 'bitter', label: 'Bitter' },
          { key: 'betrayed', label: 'Betrayed' }
        ]
      },
      {
        title: 'Weariness & Stress',
        moods: [
          { key: 'tired', label: 'Tired' },
          { key: 'overwhelmed', label: 'Overwhelmed' },
          { key: 'stressed', label: 'Stressed' }
        ]
      },
      {
        title: 'Self-Worth & Isolation',
        moods: [
          { key: 'lonely', label: 'Lonely' },
          { key: 'insecure', label: 'Insecure' },
          { key: 'guilty', label: 'Guilty' }
        ]
      }
    ]
  }
];

export const verseDB = {
  /* ========================================= */
  /*             POSITIVE EMOTIONS             */
  /* ========================================= */
  joyful: [
    { text: "The LORD has done it this very day; let us rejoice today and be glad.", ref: "Psalm 118:24" },
    { text: "You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.", ref: "Psalm 16:11" },
    { text: "Nehemiah said, “Go and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the LORD is your strength.”", ref: "Nehemiah 8:10" },
    { text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.", ref: "Romans 15:13" },
    { text: "The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.", ref: "Psalm 28:7" },
    { text: "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy,", ref: "1 Peter 1:8" },
    { text: "I have told you this so that my joy may be in you and that your joy may be complete.", ref: "John 15:11" },
    { text: "For you make me glad by your deeds, LORD; I sing for joy at what your hands have done.", ref: "Psalm 92:4" }
  ],
  excited: [
    { text: "Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.", ref: "Romans 12:11" },
    { text: "I rejoiced with those who said to me, “Let us go to the house of the LORD.”", ref: "Psalm 122:1" },
    { text: "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", ref: "Isaiah 40:31" },
    { text: "The path of the righteous is like the morning sun, shining ever brighter till the full light of day.", ref: "Proverbs 4:18" },
    { text: "Take delight in the LORD, and he will give you the desires of your heart.", ref: "Psalm 37:4" },
    { text: "However, as it is written: “What no eye has seen, what no ear has heard, and what no human mind has conceived”— the things God has prepared for those who love him—", ref: "1 Corinthians 2:9" },
    { text: "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.", ref: "Philippians 3:14" },
    { text: "I rejoice in your promise like one who finds great spoil.", ref: "Psalm 119:162" }
  ],
  victorious: [
    { text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ.", ref: "1 Corinthians 15:57" },
    { text: "No, in all these things we are more than conquerors through him who loved us.", ref: "Romans 8:37" },
    { text: "For the LORD your God is the one who goes with you to fight for you against your enemies to give you victory.”", ref: "Deuteronomy 20:4" },
    { text: "But thanks be to God, who always leads us as captives in Christ’s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere.", ref: "2 Corinthians 2:14" },
    { text: "for everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.", ref: "1 John 5:4" },
    { text: "With God we will gain the victory, and he will trample down our enemies.", ref: "Psalm 60:12" },
    { text: "The horse is made ready for the day of battle, but victory rests with the LORD.", ref: "Proverbs 21:31" },
    { text: "Through you we push back our enemies; through your name we trample our foes.", ref: "Psalm 44:5" }
  ],
  thankful: [
    { text: "give thanks in all circumstances; for this is God’s will for you in Christ Jesus.", ref: "1 Thessalonians 5:18" },
    { text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.", ref: "Psalm 100:4" },
    { text: "Give thanks to the LORD, for he is good; his love endures forever.", ref: "Psalm 107:1" },
    { text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.", ref: "Colossians 3:15" },
    { text: "always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.", ref: "Ephesians 5:20" },
    { text: "Through Jesus, therefore, let us continually offer to God a sacrifice of praise—the fruit of lips that openly profess his name.", ref: "Hebrews 13:15" },
    { text: "Let us come before him with thanksgiving and extol him with music and song.", ref: "Psalm 95:2" },
    { text: "Devote yourselves to prayer, being watchful and thankful.", ref: "Colossians 4:2" }
  ],
  blessed: [
    { text: "“But blessed is the one who trusts in the LORD, whose confidence is in him.", ref: "Jeremiah 17:7" },
    { text: "Taste and see that the LORD is good; blessed is the one who takes refuge in him.", ref: "Psalm 34:8" },
    { text: "Blessed are the pure in heart, for they will see God.", ref: "Matthew 5:8" },
    { text: "The blessing of the LORD brings wealth, without painful toil for it.", ref: "Proverbs 10:22" },
    { text: "LORD Almighty, blessed is the one who trusts in you.", ref: "Psalm 84:12" },
    { text: "“ ‘ “The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.” ’", ref: "Numbers 6:24-26" },
    { text: "Blessed is she who has believed that the Lord would fulfill his promises to her!”", ref: "Luke 1:45" },
    { text: "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,", ref: "Psalm 1:1" }
  ],
  amazed: [
    { text: "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?", ref: "Psalm 8:3-4" },
    { text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.", ref: "Psalm 139:14" },
    { text: "“Ah, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.", ref: "Jeremiah 32:17" },
    { text: "“Listen to this, Job; stop and consider God’s wonders.", ref: "Job 37:14" },
    { text: "You are the God who performs miracles; you display your power among the peoples.", ref: "Psalm 77:14" },
    { text: "LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.", ref: "Habakkuk 3:2" },
    { text: "Come and see what God has done, his awesome deeds for mankind!", ref: "Psalm 66:5" },
    { text: "and sang the song of God’s servant Moses and of the Lamb: “Great and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations.", ref: "Revelation 15:3" }
  ],
  peaceful: [
    { text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", ref: "Isaiah 26:3" },
    { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", ref: "John 14:27" },
    { text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", ref: "Philippians 4:7" },
    { text: "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.", ref: "Psalm 4:8" },
    { text: "The LORD gives strength to his people; the LORD blesses his people with peace.", ref: "Psalm 29:11" },
    { text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.", ref: "Colossians 3:15" },
    { text: "Great peace have those who love your law, and nothing can make them stumble.", ref: "Psalm 119:165" },
    { text: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ,", ref: "Romans 5:1" }
  ],
  content: [
    { text: "I am not saying this because I am in need, for I have learned to be content whatever the circumstances.", ref: "Philippians 4:11" },
    { text: "But godliness with contentment is great gain.", ref: "1 Timothy 6:6" },
    { text: "Keep your lives free from the love of money and be content with what you have, because God has said, “Never will I leave you; never will I forsake you.”", ref: "Hebrews 13:5" },
    { text: "The fear of the LORD leads to life; then one rests content, untouched by trouble.", ref: "Proverbs 19:23" },
    { text: "LORD, you alone are my portion and my cup; you make my lot secure. The boundary lines have fallen for me in pleasant places; surely I have a delightful inheritance.", ref: "Psalm 16:5-6" },
    { text: "The LORD is my shepherd, I lack nothing.", ref: "Psalm 23:1" },
    { text: "Keep falsehood and lies far from me; give me neither poverty nor riches, but give me only my daily bread.", ref: "Proverbs 30:8" },
    { text: "Moreover, when God gives someone wealth and possessions, and the ability to enjoy them, to accept their lot and be happy in their toil—this is a gift of God.", ref: "Ecclesiastes 5:19" }
  ],
  safe: [
    { text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the LORD, “He is my refuge and my fortress, my God, in whom I trust.”", ref: "Psalm 91:1-2" },
    { text: "The name of the LORD is a fortified tower; the righteous run to it and are safe.", ref: "Proverbs 18:10" },
    { text: "The LORD will keep you from all harm— he will watch over your life; the LORD will watch over your coming and going both now and forevermore.", ref: "Psalm 121:7-8" },
    { text: "You are my hiding place; you will protect me from trouble and surround me with songs of deliverance.", ref: "Psalm 32:7" },
    { text: "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.", ref: "Proverbs 29:25" },
    { text: "The eternal God is your refuge, and underneath are the everlasting arms. He will drive out your enemies before you, saying, ‘Destroy them!’", ref: "Deuteronomy 33:27" },
    { text: "A song. God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
    { text: "but whoever listens to me will live in safety and be at ease, without fear of harm.”", ref: "Proverbs 1:33" }
  ],
  loved: [
    { text: "The LORD appeared to us in the past, saying: “I have loved you with an everlasting love; I have drawn you with unfailing kindness.", ref: "Jeremiah 31:3" },
    { text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", ref: "Romans 8:38-39" },
    { text: "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.", ref: "1 John 3:1" },
    { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", ref: "John 3:16" },
    { text: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.”", ref: "Zephaniah 3:17" },
    { text: "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him.", ref: "1 John 4:9" },
    { text: "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.", ref: "Ephesians 2:4-5" },
    { text: "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.", ref: "Galatians 2:20" }
  ],
  loving: [
    { text: "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God.", ref: "1 John 4:7" },
    { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", ref: "1 Corinthians 13:4" },
    { text: "Dear friends, since God so loved us, we also ought to love one another.", ref: "1 John 4:11" },
    { text: "And over all these virtues put on love, which binds them all together in perfect unity.", ref: "Colossians 3:14" },
    { text: "“A new command I give you: Love one another. As I have loved you, so you must love one another.", ref: "John 13:34" },
    { text: "Above all, love each other deeply, because love covers over a multitude of sins.", ref: "1 Peter 4:8" },
    { text: "Be devoted to one another in love. Honor one another above yourselves.", ref: "Romans 12:10" },
    { text: "Dear children, let us not love with words or speech but with actions and in truth.", ref: "1 John 3:18" }
  ],
  forgiven: [
    { text: "as far as the east is from the west, so far has he removed our transgressions from us.", ref: "Psalm 103:12" },
    { text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.", ref: "1 John 1:9" },
    { text: "“I, even I, am he who blots out your transgressions, for my own sake, and remembers your sins no more.", ref: "Isaiah 43:25" },
    { text: "Therefore, there is now no condemnation for those who are in Christ Jesus,", ref: "Romans 8:1" },
    { text: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace", ref: "Ephesians 1:7" },
    { text: "When you were dead in your sins and in the uncircumcision of your flesh, God made you alive with Christ. He forgave us all our sins,", ref: "Colossians 2:13" },
    { text: "You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.", ref: "Micah 7:19" },
    { text: "Blessed is the one whose transgressions are forgiven, whose sins are covered.", ref: "Psalm 32:1" }
  ],
  hopeful: [
    { text: "For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
    { text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.", ref: "Romans 15:13" },
    { text: "We have this hope as an anchor for the soul, firm and secure. It enters the inner sanctuary behind the curtain,", ref: "Hebrews 6:19" },
    { text: "As for me, I will always have hope; I will praise you more and more.", ref: "Psalm 71:14" },
    { text: "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", ref: "Isaiah 40:31" },
    { text: "I say to myself, “The LORD is my portion; therefore I will wait for him.”", ref: "Lamentations 3:24" },
    { text: "Be joyful in hope, patient in affliction, faithful in prayer.", ref: "Romans 12:12" },
    { text: "“But now, Lord, what do I look for? My hope is in you.", ref: "Psalm 39:7" }
  ],
  inspired: [
    { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
    { text: "For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.", ref: "Ephesians 2:10" },
    { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", ref: "2 Timothy 1:7" },
    { text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,", ref: "Colossians 3:23" },
    { text: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.", ref: "1 Corinthians 15:58" },
    { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.”", ref: "Joshua 1:9" },
    { text: "Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?” And I said, “Here am I. Send me!”", ref: "Isaiah 6:8" },
    { text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", ref: "Proverbs 3:5-6" }
  ],
  confident: [
    { text: "Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.", ref: "Hebrews 4:16" },
    { text: "for the LORD will be at your side and will keep your foot from being snared.", ref: "Proverbs 3:26" },
    { text: "So do not throw away your confidence; it will be richly rewarded.", ref: "Hebrews 10:35" },
    { text: "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.", ref: "1 John 5:14" },
    { text: "being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.", ref: "Philippians 1:6" },
    { text: "Though an army besiege me, my heart will not fear; though war break out against me, even then I will be confident.", ref: "Psalm 27:3" },
    { text: "Such confidence we have through Christ before God. Not that we are competent in ourselves to claim anything for ourselves, but our competence comes from God.", ref: "2 Corinthians 3:4-5" },
    { text: "In him and through faith in him we may approach God with freedom and confidence.", ref: "Ephesians 3:12" }
  ],

  /* ========================================= */
  /*             NEGATIVE EMOTIONS             */
  /* ========================================= */
  anxious: [
    { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", ref: "Philippians 4:6" },
    { text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", ref: "Matthew 6:34" },
    { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
    { text: "When anxiety was great within me, your consolation brought me joy.", ref: "Psalm 94:19" },
    { text: "Anxiety weighs down the heart, but a kind word cheers it up.", ref: "Proverbs 12:25" },
    { text: "say to those with fearful hearts, “Be strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.”", ref: "Isaiah 35:4" },
    { text: "Cast your cares on the LORD and he will sustain you; he will never let the righteous be shaken.", ref: "Psalm 55:22" },
    { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", ref: "John 14:27" }
  ],
  afraid: [
    { text: "The LORD is my light and my salvation— whom shall I fear? The LORD is the stronghold of my life— of whom shall I be afraid?", ref: "Psalm 27:1" },
    { text: "When I am afraid, I put my trust in you.", ref: "Psalm 56:3" },
    { text: "I sought the LORD, and he answered me; he delivered me from all my fears.", ref: "Psalm 34:4" },
    { text: "Do not be afraid of them; the LORD your God himself will fight for you.”", ref: "Deuteronomy 3:22" },
    { text: "The LORD is with me; I will not be afraid. What can mere mortals do to me?", ref: "Psalm 118:6" },
    { text: "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.", ref: "Proverbs 29:25" },
    { text: "But now, this is what the LORD says— he who created you, Jacob, he who formed you, Israel: “Do not fear, for I have redeemed you; I have summoned you by name; you are mine.", ref: "Isaiah 43:1" },
    { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", ref: "2 Timothy 1:7" }
  ],
  doubtful: [
    { text: "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.", ref: "James 1:6" },
    { text: "Immediately the boy’s father exclaimed, “I do believe; help me overcome my unbelief!”", ref: "Mark 9:24" },
    { text: "Trust in the LORD with all your heart and lean not on your own understanding;", ref: "Proverbs 3:5" },
    { text: "Now faith is confidence in what we hope for and assurance about what we do not see.", ref: "Hebrews 11:1" },
    { text: "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.", ref: "Romans 10:17" },
    { text: "Jesus replied, “Truly I tell you, if you have faith and do not doubt, not only can you do what was done to the fig tree, but also you can say to this mountain, ‘Go, throw yourself into the sea,’ and it will be done.", ref: "Matthew 21:21" },
    { text: "Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God,", ref: "Romans 4:20" },
    { text: "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.", ref: "1 John 5:14" }
  ],
  sad: [
    { text: "“I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.”", ref: "John 16:33" },
    { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", ref: "Romans 8:28" },
    { text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", ref: "Isaiah 41:10" },
    { text: "who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.", ref: "2 Corinthians 1:4" },
    { text: "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.", ref: "Psalm 42:5" },
    { text: "Those who sow with tears will reap with songs of joy.", ref: "Psalm 126:5" },
    { text: "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.", ref: "Psalm 30:5" },
    { text: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.”", ref: "Zephaniah 3:17" }
  ],
  heartbroken: [
    { text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
    { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3" },
    { text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.", ref: "Psalm 73:26" },
    { text: "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners,", ref: "Isaiah 61:1" },
    { text: "“Do not let your hearts be troubled. You believe in God ; believe also in me.", ref: "John 14:1" },
    { text: "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice;", ref: "Isaiah 42:3" },
    { text: "“The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,", ref: "Luke 4:18" },
    { text: "I wait for the LORD, my whole being waits, and in his word I put my hope.", ref: "Psalm 130:5" }
  ],
  grieving: [
    { text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.", ref: "1 Thessalonians 4:13" },
    { text: "‘He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain, for the old order of things has passed away.”", ref: "Revelation 21:4" },
    { text: "Blessed are those who mourn, for they will be comforted.", ref: "Matthew 5:4" },
    { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", ref: "Psalm 23:4" },
    { text: "Precious in the sight of the LORD is the death of his faithful servants.", ref: "Psalm 116:15" },
    { text: "Though he brings grief, he will show compassion, so great is his unfailing love.", ref: "Lamentations 3:32" },
    { text: "So with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy.", ref: "John 16:22" },
    { text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", ref: "Romans 8:38-39" }
  ],
  angry: [
    { text: "A gentle answer turns away wrath, but a harsh word stirs up anger.", ref: "Proverbs 15:1" },
    { text: "“In your anger do not sin”: Do not let the sun go down while you are still angry,", ref: "Ephesians 4:26" },
    { text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,", ref: "James 1:19" },
    { text: "Fools give full vent to their rage, but the wise bring calm in the end.", ref: "Proverbs 29:11" },
    { text: "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.", ref: "Ecclesiastes 7:9" },
    { text: "Whoever is patient has great understanding, but one who is quick-tempered displays folly.", ref: "Proverbs 14:29" },
    { text: "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.", ref: "Colossians 3:8" },
    { text: "Refrain from anger and turn from wrath; do not fret—it leads only to evil.", ref: "Psalm 37:8" }
  ],
  bitter: [
    { text: "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.", ref: "Hebrews 12:15" },
    { text: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.", ref: "Ephesians 4:31" },
    { text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.", ref: "Ephesians 4:32" },
    { text: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.", ref: "Colossians 3:13" },
    { text: "But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth.", ref: "James 3:14" },
    { text: "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.", ref: "Matthew 6:14" },
    { text: "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.", ref: "Romans 12:17" },
    { text: "Each heart knows its own bitterness, and no one else can share its joy.", ref: "Proverbs 14:10" }
  ],
  betrayed: [
    { text: "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend,", ref: "Psalm 55:12-13" },
    { text: "Even my close friend, someone I trusted, one who shared my bread, has turned against me.", ref: "Psalm 41:9" },
    { text: "Do not take revenge, my dear friends, but leave room for God’s wrath, for it is written: “It is mine to avenge; I will repay,” says the Lord.", ref: "Romans 12:19" },
    { text: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.", ref: "Genesis 50:20" },
    { text: "At my first defense, no one came to my support, but everyone deserted me. May it not be held against them.", ref: "2 Timothy 4:16" },
    { text: "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.", ref: "Proverbs 18:24" },
    { text: "When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly.", ref: "1 Peter 2:23" },
    { text: "But I tell you, love your enemies and pray for those who persecute you,", ref: "Matthew 5:44" }
  ],
  tired: [
    { text: "“Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
    { text: "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", ref: "Isaiah 40:31" },
    { text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.", ref: "Galatians 6:9" },
    { text: "I will refresh the weary and satisfy the faint.”", ref: "Jeremiah 31:25" },
    { text: "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.", ref: "Psalm 4:8" },
    { text: "The LORD replied, “My Presence will go with you, and I will give you rest.”", ref: "Exodus 33:14" },
    { text: "And as for you, brothers and sisters, never tire of doing what is good.", ref: "2 Thessalonians 3:13" },
    { text: "He gives strength to the weary and increases the power of the weak.", ref: "Isaiah 40:29" }
  ],
  overwhelmed: [
    { text: "From the ends of the earth I call to you, I call as my heart grows faint; lead me to the rock that is higher than I.", ref: "Psalm 61:2" },
    { text: "A song. God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
    { text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.", ref: "Isaiah 43:2" },
    { text: "Because of the LORD’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.", ref: "Lamentations 3:22-23" },
    { text: "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.", ref: "Matthew 11:29" },
    { text: "The LORD will fight for you; you need only to be still.”", ref: "Exodus 14:14" },
    { text: "When my spirit grows faint within me, it is you who watch over my way. In the path where I walk people have hidden a snare for me.", ref: "Psalm 142:3" },
    { text: "My soul is weary with sorrow; strengthen me according to your word.", ref: "Psalm 119:28" }
  ],
  stressed: [
    { text: "“Martha, Martha,” the Lord answered, “you are worried and upset about many things, but few things are needed—or indeed only one. Mary has chosen what is better, and it will not be taken away from her.”", ref: "Luke 10:41-42" },
    { text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", ref: "Isaiah 26:3" },
    { text: "Trouble and distress have come upon me, but your commands give me delight.", ref: "Psalm 119:143" },
    { text: "Return to your rest, my soul, for the LORD has been good to you.", ref: "Psalm 116:7" },
    { text: "I sought the LORD, and he answered me; he delivered me from all my fears.", ref: "Psalm 34:4" },
    { text: "“Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?", ref: "Matthew 6:25" },
    { text: "Commit to the LORD whatever you do, and he will establish your plans.", ref: "Proverbs 16:3" },
    { text: "The fruit of that righteousness will be peace; its effect will be quietness and confidence forever.", ref: "Isaiah 32:17" }
  ],
  lonely: [
    { text: "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.”", ref: "Deuteronomy 31:6" },
    { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.”", ref: "Joshua 1:9" },
    { text: "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.”", ref: "Matthew 28:20" },
    { text: "Though my father and mother forsake me, the LORD will receive me.", ref: "Psalm 27:10" },
    { text: "Keep your lives free from the love of money and be content with what you have, because God has said, “Never will I leave you; never will I forsake you.”", ref: "Hebrews 13:5" },
    { text: "Turn to me and be gracious to me, for I am lonely and afflicted.", ref: "Psalm 25:16" },
    { text: "I will not leave you as orphans; I will come to you.", ref: "John 14:18" },
    { text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.", ref: "Psalm 68:5-6" }
  ],
  insecure: [
    { text: "For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.", ref: "Ephesians 2:10" },
    { text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.", ref: "Psalm 139:14" },
    { text: "But the LORD said to Samuel, “Do not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.”", ref: "1 Samuel 16:7" },
    { text: "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.", ref: "1 John 4:18" },
    { text: "“Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.”", ref: "Jeremiah 1:5" },
    { text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.", ref: "Romans 12:2" },
    { text: "But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.", ref: "1 Peter 2:9" },
    { text: "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don’t be afraid; you are worth more than many sparrows.", ref: "Luke 12:6-7" }
  ],
  guilty: [
    { text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.", ref: "1 John 1:9" },
    { text: "as far as the east is from the west, so far has he removed our transgressions from us.", ref: "Psalm 103:12" },
    { text: "“Come now, let us settle the matter,” says the LORD. “Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.", ref: "Isaiah 1:18" },
    { text: "Therefore, there is now no condemnation for those who are in Christ Jesus,", ref: "Romans 8:1" },
    { text: "Then I acknowledged my sin to you and did not cover up my iniquity. I said, “I will confess my transgressions to the LORD.” And you forgave the guilt of my sin.", ref: "Psalm 32:5" },
    { text: "You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.", ref: "Micah 7:19" },
    { text: "For I will forgive their wickedness and will remember their sins no more.”", ref: "Hebrews 8:12" },
    { text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", ref: "2 Corinthians 5:17" }
  ]
};
