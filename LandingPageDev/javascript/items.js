
var itemNames = ["aerosol spray cans, empty","aerosol spray cans, full or partially full","air conditioning freon","aluminum foil","ammonia-based cleaners","ammunition","appliances","asbestos (friable)","asphalt (broken)","automobile","automobile oil","automobile parts (metal, clean with no oil)","automobile tires","baby clothes","baby diapers","baby supplies","batteries, alkaline","batteries, automobile","batteries, button or hearing aid","batteries, lithium","batteries, rechargeable","bed frames","bed linens","beds","bicycle tires","bicycle tubes","bike","binders (notebook)","Bio-degradable or compostable “plastic”","blankets","blenders","boat","books (childrens)","books (fiction)","books (reference)","books (textbooks)","bottle caps","bowls","brick","bubble wrap (plastic)","building materials","business inventory","camera, video and still","campaign signs","Campbell's Soup labels","cardboard","cassette tapes","CD players","CDs","cellular phone","chemical fertilizers","children's clothing","Chirstmas lights","clothes","clothes dryer","clothes hangers (metal)","clothes hangers (plastic)","coffee maker","coloring books","compact flourescent lightbulbs (CFLs)","computer monitor","concrete","cooking oil/grease","copiers","copper pipe","crayons","desk","digital scales","dining chair","dirt","disinfectants","disposable beverage lids","drain cleaner","DVD players","DVDs","electronic toothbrushes","expired or unwanted medicines","explosives","eye equipment","eyeglasses","file cabinets","fire extinguisher","fireworks","flares (emergency road flares)","flea repellant, powder","floor and furniture polish","floppy disks","flowerpots","fluorescent bulbs and tubes","foil wrappers","food (non-perishable)","food (perishable produce)","food processor","fruit","furniture","garden hoses","glass cups, plates and cookware","glue (if solvent based), epoxy","gravel","halogen bulbs","hearing aids","heilum tank","home décor","hot plate","household goods","hypodermic needles","ink, toner, developer, etc.","Ipod","iron","jewelry","juice boxes","kerosene or lamp oil","lamp","laser printer cartridge","light bulbs","lighter fluid","linens","machinery and tools with electric motors","magazines (recent)","mattress","medical and infectious waste","medical equipment and supplies","medicine (perscription and non-perscription)","metal (all kinds)","metal furniture","metal polish","microwave","milk carton","mirror","moth balls","MP3 player","musical greeting card","nail polish remover","nursery pots","office equipment","oil (used motor oil)","oil filters (automobile)","oven","oven cleaner","packing bubble wrap","paint cans (steel), empty & dry","paint cans, partially full","paint thinner, stripper, etc","paint--oil, water base and latex based","pallets (wooden)","PDA","pens and pencils","personal care products (unopened)","pesticide container, empty","pesticides (bug sprays, etc.)","Phone books","photographic developer","photographic fixer","picture frame","planting trays","plastic (outdoor) furniture","plastic bags","plastic beverage straw","plastic rain bags (from newspapers)","plastic wrappers","plates (dining, salad, dessert)","poisons (rat, mice, slug, etc.)","polystyrene (packing) peanuts","pool chemicals","pots and pans","pressure-treated wood","printer (laser and inkjet)","printer cartridge","propane cylinders, non-refillable","propane cylinders, refillable","puzzle","PVC pipe","radio","radioactive materials","rags","railroad ties (lumber)","reciepts (paper)","records","refrigerator","rubber bands","rug","rug cleaner","rust remover","sand","satellite dish (metal)","satellite receivers","scanner","sharps (syringes, hypodermic needles, lancets)","shoe polish or dye","shoes","sinks (porcelain)","smoke alarms","sod","sofa","solar panels","space heater","speakers","spot remover","stereo","strawberry/ tomato baskets","Styrofoam (expanded polystyrene)","suitcase","syringes","table","table linens","tapes (music etc.)","telephone","television","thermometer, mercury","tires, automobile","toaster","toilets (porcelain)","tomato/ strawberry baskets","tools","toothbrush","toys","tree stump","twist ties","used needles and syringes","utensils (forks, knives, spoons)","vacuum cleaner","VCR","VHS videos","video and still cameras","Video game machines (PS, XBOX, etc)","washing machine","water filter","water heater","water softeners","wax paper","window glass","wine bottle lead foil","wine corks","wood","wood (logs, firewood)","wood (lumber)","wood (pressure-treated)","wood furniture","wood pallets","wrapping paper","yard waste","yoga mat"];
var items = [{Id:1,Name:"aerosol spray cans, empty",General_Info:"Put in recycling cart with metal cans",Notes:"More information about scrap metal recycling:  http:\/\/cityofdavis.org\/city-hall\/public-works\/solid-waste-and-recycling\/recycling\/scrap-metal"},{Id:2,Name:"aerosol spray cans, full or partially full",General_Info:"DO NOT THROW AWAY IN THE TRASH--this is Household Hazardous Waste. Take to a Household Hazardous Waste Drop-off Event.",Notes:""},{Id:6,Name:"air conditioning freon",General_Info:"DO NOT THROW AWAY IN THE TRASH--this is Household Hazardous Waste.",Notes:""},{Id:8,Name:"aluminum foil",General_Info:"Clean aluminum foil (without a lot of food stuck to it) can be placed in your recycling cart or brought to Davis Waste Removal for free recycling.",Notes:""},{Id:9,Name:"ammonia-based cleaners",General_Info:"DO NOT THROW AWAY IN THE TRASH--this is Household Hazardous Waste.",Notes:""},{Id:11,Name:"ammunition",General_Info:"DO NOT THROW AWAY IN THE TRASH. Call the Yolo County Bomb Squad 530-668-5280",Notes:""},{Id:12,Name:"appliances",General_Info:"See washing machine, clothes dryer etc., for reuse options.",Notes:""},{Id:13,Name:"asbestos (friable)",General_Info:"DO NOT THROW AWAY IN THE TRASH--this is Household Hazardous Waste.",Notes:""},{Id:15,Name:"asphalt (broken)",General_Info:"",Notes:""},{Id:16,Name:"automobile",General_Info:"",Notes:""},{Id:17,Name:"automobile oil",General_Info:"For free recycling options, see used oil recycling. Remember to recycle your oil filter too! Take contaminated motor oil to a Household Hazardous Waste Drop-Off Event. ",Notes:""},{Id:18,Name:"automobile parts (metal, clean with no oil)",General_Info:"Recycle with scrap metals.",Notes:"More information about scrap metal recycling:  http:\/\/cityofdavis.org\/city-hall\/public-works\/solid-waste-and-recycling\/recycling\/scrap-metal"},{Id:19,Name:"automobile tires",General_Info:"",Notes:""},{Id:20,Name:"baby clothes",General_Info:"",Notes:""},{Id:21,Name:"baby diapers",General_Info:"",Notes:""},{Id:22,Name:"baby supplies",General_Info:"",Notes:""},{Id:23,Name:"batteries, alkaline",General_Info:"DO NOT THROW AWAY IN THE TRASH. Residents can bring alkaline batteries to a free drop-off site in Davis.",Notes:""},{Id:25,Name:"batteries, automobile",General_Info:"DO NOT THROW AWAY IN THE TRASH--this is Hazardous Waste.",Notes:""},{Id:27,Name:"batteries, button or hearing aid",General_Info:"DO NOT THROW AWAY IN THE TRASH. Residents can bring alkaline batteries to a free drop-off site in Davis.",Notes:""},{Id:29,Name:"batteries, lithium",General_Info:"DO NOT THROW AWAY IN THE TRASH. Residents can bring alkaline batteries to a free drop-off site in Davis.",Notes:""}];