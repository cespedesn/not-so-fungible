


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🪙 Seeding users..."
u1 = User.create(user_admin: true, user_fullname: "Neftali Cespedes", user_name: "cespedesn", user_email: "cespedesn@gmail.com", user_password: "nft123")
u2 = User.create(user_admin: false, user_fullname: "User Two", user_name: "user2", user_email: "user2@gmail.com", user_password: "user222")
u3 = User.create(user_admin: false, user_fullname: "User Three", user_name: "user3", user_email: "user3@gmail.com", user_password: "user333")

 


puts "🪙 Seeding collections..."
c1 = Collection.create(collection_name:"Astronuts", collection_description:"The few remaining survivors of planet Juglandaceae or better know as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", collection_rating:"⭐⭐⭐", user_id: u1.id)

c2 = Collection.create(collection_name:"Baby Baboons", collection_description:"These baby baboons have lost their mother and need to fend for themselves. The eldest Baby Baboon Rufus, has minted these one-of-one NFTs in hopes of supporting his family. Join the community and receive the 24 pack of Baby-Boon-Beer airdrop coming in 2024.", collection_rating:"⭐⭐⭐⭐", user_id: u1.id)

c3 = Collection.create(collection_name:"Bob Ross Flossies", collection_description:"Though many may not know, Bob Ross attended NYU as a dental student but then transitioned to his true love, art. It was not until his passing that a collection dedicated to his love for dental hygiene was discovered. This archive is being shared to the public and are rare one-of-one self portraits.  being shared to the public and are rare one-of-one self portraits. Do not miss out on your chance to own a piece of history.", collection_rating:"⭐⭐⭐⭐⭐", user_id: u1.id)

c4 = Collection.create(collection_name:"Dance Battle Bears", collection_description:"After completing their world renowned tour, Dance Battle Bears have decided to let their fanbase in on their journey of greatness by minting this rare collection. By joining the DBB community, NFT holders will receive discounts on future tickets and merchandise!", collection_rating:"⭐⭐⭐⭐⭐", user_id: u1.id)

c5 = Collection.create(collection_name:"Forrest Grumps", collection_description:"Mega-fan and President of the Tom Hanks Fanclub, Wilson Castburg, has minted a collection of grumpy Forrest Gump NFTs. All those who are part of the fanclub and own this rare delicacy will receive discounts on all Tom Hank films and an airdrop of Box of chocolates in 2024. Do not miss out and join the family!", collection_rating:"⭐⭐⭐⭐", user_id: u1.id)

c6 = Collection.create(collection_name:"HotDawgs", collection_description:"Do you love hotdogs? Do you also love dogs? Well, you have just stumbled upon a once in a lifetime opportunity. These pretty pups are not only adorable but offer rewards from both PetCart and Franklin hotdogs. Own a one-of-one NFT and receive a lifetime 12.5% off selected items. Join our discord to learn more!", collection_rating:"⭐⭐⭐⭐", user_id: u1.id)

c7 = Collection.create(collection_name:"Lonely Lemurs", collection_description:"Thought it was tough being a human? Try being a lemur for a day. These NFTs take a deep dive into the life and struggles of lonely lemurs. By purchasing this rare NFT you can impact the life of a lemur significantly. All holders will receive a plush lemur from the Lonely Lemur Foundation.", collection_rating:"⭐⭐⭐⭐", user_id: u1.id)

c8 = Collection.create(collection_name:"MerMommas", collection_description:"In the deep crevices of the coral reefs in FIJI, lies the most maternal myth one can ever imagine. It is said that MerMomma is the sole reason marine life even exists. Jean-Michel Beach has put together this breath-taking collection to help rebuild marine life and keep our oceans clean. Join the community today to make a difference.", collection_rating:"⭐⭐⭐⭐", user_id: u1.id)

c9 = Collection.create(collection_name:"Moma Meow Meows", collection_description:"The Museum of Modern Art has ventured off into the digital realm by producing its first NFT collection. This collection is led by the efforts of Jazzy, who is the first graphic designing cat ever. She pays homage to not only her fellow cats but also her favorite artists like Vincent Van Gogh, Salvadore Dali, Pablo Picasso, and Frida Kahlo. Join the community and own a piece of history.", collection_rating:"⭐⭐⭐⭐", user_id: u1.id)

c10 = Collection.create(collection_name:"Nunchuck Norris", collection_description:"It is said that Chuck Norris can defeat a brick wall in tennis. It is also said that Chuck Norris killed two stones with one bird. But did you also know that Chuck Norris created an NFT Collection? This collection allows holders to not only own a piece of history but will also receive an airdrop of a pair of nunchucks minted by Chuck Norris himself. A once in a lifetime opportunity awaits you. Join the community!", collection_rating:"⭐⭐⭐⭐⭐", user_id: u1.id)

c11 = Collection.create(collection_name:"One Eyed Frens", collection_description:"We could all use a friend that always keeps an eye on us, am I right? This collection houses the most loveable one-eyed friends a human can ask for. Those who purchase will receive a One Eyed Frens squish ball after holding for just a year. Join the community today!", collection_rating:"⭐⭐⭐", user_id: u1.id)

c12 = Collection.create(collection_name:"Silly Sloths", collection_description:"As we grow older we tend to take our lives a bit too seriously. Life can move fast if you don’t slow down and enjoy it. Silly Sloths embody that very message. Slow down and laugh a little with a Silly Sloth. Join the community today and receive sloth tokens dropping in 2024!", collection_rating:"⭐⭐⭐⭐⭐", user_id: u1.id)

c13 = Collection.create(collection_name:"Snail Mail", collection_description:"Snail Mail is an adorable collection that has partnered up with the United State Postal Service to provide holders with free stamps! Long term holders are rewarded with 365 stamps after a year of holding. You do not want to miss this limited time partnership! Join our discord for more information.", collection_rating:"⭐⭐⭐⭐", user_id: u1.id)

c14 = Collection.create(collection_name:"Whos Wise", collection_description:"Who Wise is brought to you by Motive-8, a daily motivational quote generator. This collection is filled with stoic owls who provide you with not only a daily motivational quote but a wise companion. Holders can stake their NFTs to earn Who tokens and receive future airdrops. Join the community today!", collection_rating:"⭐⭐⭐", user_id: u1.id)

c15 = Collection.create(collection_name:"Yacht Chimps", collection_description:"Yacht Chimps have been recognized as the NFT industry most valuable item to date. With perks like exclusive club meetings, yacht parties, free bananas, and more, Yacht Chimps have separated themselves from all other collections. It may cost you a pretty penny but the lifestyle is worth it. Join the community today!", collection_rating:"⭐⭐⭐⭐⭐", user_id: u1.id)



puts "🪙 Seeding user_wallets..."
w1 = Wallet.create(user_wallet_available_funds: "3000 schmklz 🪙", wallet_nft_count:0, user_id:u1.id)
w2 = Wallet.create(user_wallet_available_funds: "200 schmklz 🪙", wallet_nft_count:0, user_id:u2.id)
w3 = Wallet.create(user_wallet_available_funds: "200 schmklz 🪙", wallet_nft_count:0, user_id:u3.id)


puts "🪙 Seeding nfts..."
nft1 = Nft.create(nft_name:"Astronut#1", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft2 = Nft.create(nft_name:"Astronut#2", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft3 = Nft.create(nft_name:"Astronut#3", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft4 = Nft.create(nft_name:"Astronut#4", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft5 = Nft.create(nft_name:"Astronut#5", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft6 = Nft.create(nft_name:"Astronut#6", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft7 = Nft.create(nft_name:"Astronut#7", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft8 = Nft.create(nft_name:"Astronut#8", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft9 = Nft.create(nft_name:"Astronut#9", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", 
nft_image:"", collection_id: c1.id)
nft10 = Nft.create(nft_name:"Astronut#10", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", nft_image:"", collection_id: c1.id)
nft11 = Nft.create(nft_name:"Astronut#11", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", nft_image:"", collection_id: c1.id)
nft12 = Nft.create(nft_name:"Astronut#12", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", nft_image:"", collection_id: c1.id)
nft13 = Nft.create(nft_name:"Astronut#13", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", nft_image:"", collection_id: c1.id)
nft14 = Nft.create(nft_name:"Astronut#14", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", nft_image:"", collection_id: c1.id)
nft15 = Nft.create(nft_name:"Astronut#15", nft_price:"15 schmklz 🪙",nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", nft_image:"", collection_id: c1.id)
nft15 = Nft.create(nft_name:"Astronut#15", nft_price:"15 schmklz 🪙", nft_description:"The few remaining survivors of planet Juglandaceae or better known as Juglone, scour space to recover bits of their native land after being hit by a meteor. Help fund the recovery efforts in joining the Astronut's voyage by purchasing a one-of-one NFT.", nft_image:"", collection_id: c1.id)


nft16 = Nft.create(nft_name:"Baby Baboons#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft17 = Nft.create(nft_name:"Baby Baboons#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft18 = Nft.create(nft_name:"Baby Baboons#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft19 = Nft.create(nft_name:"Baby Baboons#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft20 = Nft.create(nft_name:"Baby Baboons#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft21 = Nft.create(nft_name:"Baby Baboons#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft22 = Nft.create(nft_name:"Baby Baboons#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft23 = Nft.create(nft_name:"Baby Baboons#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft24 = Nft.create(nft_name:"Baby Baboons#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft25 = Nft.create(nft_name:"Baby Baboons#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft26 = Nft.create(nft_name:"Baby Baboons#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft27 = Nft.create(nft_name:"Baby Baboons#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft28 = Nft.create(nft_name:"Baby Baboons#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft29 = Nft.create(nft_name:"Baby Baboons#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft30 = Nft.create(nft_name:"Baby Baboons#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)
nft31 = Nft.create(nft_name:"Baby Baboons#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c2.id)


nft32 = Nft.create(nft_name:"Bob Ross Flossies#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft33 = Nft.create(nft_name:"Bob Ross Flossies#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft34 = Nft.create(nft_name:"Bob Ross Flossies#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft35 = Nft.create(nft_name:"Bob Ross Flossies#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft36 = Nft.create(nft_name:"Bob Ross Flossies#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft37 = Nft.create(nft_name:"Bob Ross Flossies#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft38 = Nft.create(nft_name:"Bob Ross Flossies#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft39 = Nft.create(nft_name:"Bob Ross Flossies#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft40 = Nft.create(nft_name:"Bob Ross Flossies#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft41 = Nft.create(nft_name:"Bob Ross Flossies#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft42 = Nft.create(nft_name:"Bob Ross Flossies#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft43 = Nft.create(nft_name:"Bob Ross Flossies#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft44 = Nft.create(nft_name:"Bob Ross Flossies#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft45 = Nft.create(nft_name:"Bob Ross Flossies#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft46 = Nft.create(nft_name:"Bob Ross Flossies#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)
nft47 = Nft.create(nft_name:"Bob Ross Flossies#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c3.id)


nft48 = Nft.create(nft_name:"Dance Battle Bears#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft49 = Nft.create(nft_name:"Dance Battle Bears#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft50 = Nft.create(nft_name:"Dance Battle Bears#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft51 = Nft.create(nft_name:"Dance Battle Bears#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft52 = Nft.create(nft_name:"Dance Battle Bears#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft53 = Nft.create(nft_name:"Dance Battle Bears#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft54 = Nft.create(nft_name:"Dance Battle Bears#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft55 = Nft.create(nft_name:"Dance Battle Bears#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft56 = Nft.create(nft_name:"Dance Battle Bears#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft57 = Nft.create(nft_name:"Dance Battle Bears#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft58 = Nft.create(nft_name:"Dance Battle Bears#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft59 = Nft.create(nft_name:"Dance Battle Bears#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft60 = Nft.create(nft_name:"Dance Battle Bears#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft61 = Nft.create(nft_name:"Dance Battle Bears#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft62 = Nft.create(nft_name:"Dance Battle Bears#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)
nft63 = Nft.create(nft_name:"Dance Battle Bears#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c4.id)


nft64 = Nft.create(nft_name:"Forrest Grumps#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft65 = Nft.create(nft_name:"Forrest Grumps#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft66 = Nft.create(nft_name:"Forrest Grumps#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft67 = Nft.create(nft_name:"Forrest Grumps#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft68 = Nft.create(nft_name:"Forrest Grumps#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft69 = Nft.create(nft_name:"Forrest Grumps#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft70 = Nft.create(nft_name:"Forrest Grumps#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft71 = Nft.create(nft_name:"Forrest Grumps#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft72 = Nft.create(nft_name:"Forrest Grumps#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft73 = Nft.create(nft_name:"Forrest Grumps#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft74 = Nft.create(nft_name:"Forrest Grumps#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft75 = Nft.create(nft_name:"Forrest Grumps#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft76 = Nft.create(nft_name:"Forrest Grumps#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft77 = Nft.create(nft_name:"Forrest Grumps#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft78 = Nft.create(nft_name:"Forrest Grumps#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)
nft79 = Nft.create(nft_name:"Forrest Grumps#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c5.id)


nft80 = Nft.create(nft_name:"HotDawgs#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft81 = Nft.create(nft_name:"HotDawgs#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft82 = Nft.create(nft_name:"HotDawgs#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft83 = Nft.create(nft_name:"HotDawgs#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft84 = Nft.create(nft_name:"HotDawgs#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft85 = Nft.create(nft_name:"HotDawgs#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft86 = Nft.create(nft_name:"HotDawgs#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft87 = Nft.create(nft_name:"HotDawgs#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft88 = Nft.create(nft_name:"HotDawgs#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft89 = Nft.create(nft_name:"HotDawgs#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft90 = Nft.create(nft_name:"HotDawgs#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft91 = Nft.create(nft_name:"HotDawgs#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft92 = Nft.create(nft_name:"HotDawgs#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft93 = Nft.create(nft_name:"HotDawgs#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft94 = Nft.create(nft_name:"HotDawgs#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)
nft95 = Nft.create(nft_name:"HotDawgs#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c6.id)


nft96 = Nft.create(nft_name:"Lonely Lemurs#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft97 = Nft.create(nft_name:"Lonely Lemurs#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft98 = Nft.create(nft_name:"Lonely Lemurs#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft99 = Nft.create(nft_name:"Lonely Lemurs#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft100 = Nft.create(nft_name:"Lonely Lemurs#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft101 = Nft.create(nft_name:"Lonely Lemurs#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft102 = Nft.create(nft_name:"Lonely Lemurs#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft103 = Nft.create(nft_name:"Lonely Lemurs#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft104 = Nft.create(nft_name:"Lonely Lemurs#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft105 = Nft.create(nft_name:"Lonely Lemurs#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft106 = Nft.create(nft_name:"Lonely Lemurs#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft107 = Nft.create(nft_name:"Lonely Lemurs#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft108 = Nft.create(nft_name:"Lonely Lemurs#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft109 = Nft.create(nft_name:"Lonely Lemurs#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft110 = Nft.create(nft_name:"Lonely Lemurs#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)
nft111 = Nft.create(nft_name:"Lonely Lemurs#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c7.id)


nft112 = Nft.create(nft_name:"MerMommas#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft113 = Nft.create(nft_name:"MerMommas#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft114 = Nft.create(nft_name:"MerMommas#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft115 = Nft.create(nft_name:"MerMommas#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft116 = Nft.create(nft_name:"MerMommas#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft117 = Nft.create(nft_name:"MerMommas#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft118 = Nft.create(nft_name:"MerMommas#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft119 = Nft.create(nft_name:"MerMommas#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft120 = Nft.create(nft_name:"MerMommas#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft121 = Nft.create(nft_name:"MerMommas#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft122 = Nft.create(nft_name:"MerMommas#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft123 = Nft.create(nft_name:"MerMommas#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft124 = Nft.create(nft_name:"MerMommas#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft125 = Nft.create(nft_name:"MerMommas#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft126 = Nft.create(nft_name:"MerMommas#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)
nft127 = Nft.create(nft_name:"MerMommas#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c8.id)



nft128 = Nft.create(nft_name:"MoMa Meow Meows#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft129 = Nft.create(nft_name:"MoMa Meow Meows#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft130 = Nft.create(nft_name:"MoMa Meow Meows#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft131 = Nft.create(nft_name:"MoMa Meow Meows#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft132 = Nft.create(nft_name:"MoMa Meow Meows#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft133 = Nft.create(nft_name:"MoMa Meow Meows#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft134 = Nft.create(nft_name:"MoMa Meow Meows#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft135 = Nft.create(nft_name:"MoMa Meow Meows#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft136 = Nft.create(nft_name:"MoMa Meow Meows#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft137 = Nft.create(nft_name:"MoMa Meow Meows#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft138 = Nft.create(nft_name:"MoMa Meow Meows#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft139 = Nft.create(nft_name:"MoMa Meow Meows#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft140 = Nft.create(nft_name:"MoMa Meow Meows#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft141 = Nft.create(nft_name:"MoMa Meow Meows#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft142 = Nft.create(nft_name:"MoMa Meow Meows#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)
nft143 = Nft.create(nft_name:"MoMa Meow Meows#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c9.id)


nft144 = Nft.create(nft_name:"Nunchuck Norris#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft145 = Nft.create(nft_name:"Nunchuck Norris#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft146 = Nft.create(nft_name:"Nunchuck Norris#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft147 = Nft.create(nft_name:"Nunchuck Norris#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft148 = Nft.create(nft_name:"Nunchuck Norris#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft149 = Nft.create(nft_name:"Nunchuck Norris#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft150 = Nft.create(nft_name:"Nunchuck Norris#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft151 = Nft.create(nft_name:"Nunchuck Norris#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft152 = Nft.create(nft_name:"Nunchuck Norris#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft153 = Nft.create(nft_name:"Nunchuck Norris#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft154 = Nft.create(nft_name:"Nunchuck Norris#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft155 = Nft.create(nft_name:"Nunchuck Norris#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft156 = Nft.create(nft_name:"Nunchuck Norris#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft157 = Nft.create(nft_name:"Nunchuck Norris#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft158 = Nft.create(nft_name:"Nunchuck Norris#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)
nft159 = Nft.create(nft_name:"Nunchuck Norris#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c10.id)


nft160 = Nft.create(nft_name:"One Eyed Frens#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft161 = Nft.create(nft_name:"One Eyed Frens#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft162 = Nft.create(nft_name:"One Eyed Frens#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft163 = Nft.create(nft_name:"One Eyed Frens#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft164 = Nft.create(nft_name:"One Eyed Frens#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft165 = Nft.create(nft_name:"One Eyed Frens#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft166 = Nft.create(nft_name:"One Eyed Frens#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft167 = Nft.create(nft_name:"One Eyed Frens#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft168 = Nft.create(nft_name:"One Eyed Frens#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft169 = Nft.create(nft_name:"One Eyed Frens#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft170 = Nft.create(nft_name:"One Eyed Frens#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft171 = Nft.create(nft_name:"One Eyed Frens#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft172 = Nft.create(nft_name:"One Eyed Frens#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft173 = Nft.create(nft_name:"One Eyed Frens#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft174 = Nft.create(nft_name:"One Eyed Frens#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)
nft175 = Nft.create(nft_name:"One Eyed Frens#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c11.id)



nft176 = Nft.create(nft_name:"Silly Sloths#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft177 = Nft.create(nft_name:"Silly Sloths#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft178 = Nft.create(nft_name:"Silly Sloths#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft179 = Nft.create(nft_name:"Silly Sloths#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft180 = Nft.create(nft_name:"Silly Sloths#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft181 = Nft.create(nft_name:"Silly Sloths#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft182 = Nft.create(nft_name:"Silly Sloths#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft183 = Nft.create(nft_name:"Silly Sloths#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft184 = Nft.create(nft_name:"Silly Sloths#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft185 = Nft.create(nft_name:"Silly Sloths#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft186 = Nft.create(nft_name:"Silly Sloths#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft187 = Nft.create(nft_name:"Silly Sloths#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft188 = Nft.create(nft_name:"Silly Sloths#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft189 = Nft.create(nft_name:"Silly Sloths#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft190 = Nft.create(nft_name:"Silly Sloths#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)
nft191 = Nft.create(nft_name:"Silly Sloths#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c12.id)



nft192 = Nft.create(nft_name:"Snail Mail#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft193 = Nft.create(nft_name:"Snail Mail#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft194 = Nft.create(nft_name:"Snail Mail#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft195 = Nft.create(nft_name:"Snail Mail#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft196 = Nft.create(nft_name:"Snail Mail#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft197 = Nft.create(nft_name:"Snail Mail#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft198 = Nft.create(nft_name:"Snail Mail#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft199 = Nft.create(nft_name:"Snail Mail#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft200 = Nft.create(nft_name:"Snail Mail#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft201 = Nft.create(nft_name:"Snail Mail#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft202 = Nft.create(nft_name:"Snail Mail#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft203 = Nft.create(nft_name:"Snail Mail#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft204 = Nft.create(nft_name:"Snail Mail#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft205 = Nft.create(nft_name:"Snail Mail#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft206 = Nft.create(nft_name:"Snail Mail#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)
nft207 = Nft.create(nft_name:"Snail Mail#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c13.id)



nft208 = Nft.create(nft_name:"Whos Wise#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft209 = Nft.create(nft_name:"Whos Wise#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft210 = Nft.create(nft_name:"Whos Wise#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft211 = Nft.create(nft_name:"Whos Wise#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft212 = Nft.create(nft_name:"Whos Wise#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft213 = Nft.create(nft_name:"Whos Wise#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft214 = Nft.create(nft_name:"Whos Wise#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft215 = Nft.create(nft_name:"Whos Wise#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft216 = Nft.create(nft_name:"Whos Wise#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft217 = Nft.create(nft_name:"Whos Wise#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft218 = Nft.create(nft_name:"Whos Wise#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft219 = Nft.create(nft_name:"Whos Wise#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft220 = Nft.create(nft_name:"Whos Wise#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft221 = Nft.create(nft_name:"Whos Wise#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft222 = Nft.create(nft_name:"Whos Wise#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)
nft223 = Nft.create(nft_name:"Whos Wise#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c14.id)



nft224 = Nft.create(nft_name:"Yacht Chimps#1", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft225 = Nft.create(nft_name:"Yacht Chimps#2", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft226 = Nft.create(nft_name:"Yacht Chimps#3", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft227 = Nft.create(nft_name:"Yacht Chimps#4", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft228 = Nft.create(nft_name:"Yacht Chimps#5", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft229 = Nft.create(nft_name:"Yacht Chimps#6", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft230 = Nft.create(nft_name:"Yacht Chimps#7", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft231 = Nft.create(nft_name:"Yacht Chimps#8", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft232 = Nft.create(nft_name:"Yacht Chimps#9", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft233 = Nft.create(nft_name:"Yacht Chimps#10", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft234 = Nft.create(nft_name:"Yacht Chimps#11", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft235 = Nft.create(nft_name:"Yacht Chimps#12", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft236 = Nft.create(nft_name:"Yacht Chimps#13", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft237 = Nft.create(nft_name:"Yacht Chimps#14", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft238 = Nft.create(nft_name:"Yacht Chimps#15", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)
nft239 = Nft.create(nft_name:"Yacht Chimps#16", nft_price:"", nft_description:"", nft_image:"", collection_id: c15.id)



puts "🪙 Seeding complete!"