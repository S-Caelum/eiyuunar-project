import AboutScreen from '../components/root/about-screen';
import TitleScreen from '../components/root/title-screen';

const phrases = [
  `What doth govern the fate 
of mankind in this world
Some unseen being 
Or a law 
like the Hand of Providence
that doth hover oer the world
At the very least tis true
that man hath no power
een oer his own will`,
  `What is man
that Thou art mindful of him
For he is but a reed
the feeblest thing in nature
yet a thinking reed
Tis not from space that
I must seek my dignity
but from the governance of my thought`,
  `Know ye not that your body is 
a temple of the Holy Ghost 
which is in you whom ye have from God 
Therefore glorify God 
in your body a
nd in your spirit which are Gods`,
  `To err is human 
to forgive divine 
Yet I say unto thee 
greater still is
the strength to endure 
that which cannot
be forgivn`,
  `I think therefore I am 
Yet what is this I 
A substance whose 
whole essence or nature 
is to think 
and which for its existence 
hath no need of place
nor dependeth 
on any material thing`,
  `The unexamined life is not worth living
for what manner of man liveth
if he knoweth not his own soul`,
  `The stars in their courses
do obey a law divine
and so too doth the human heart
though it rage against it`,
  `A king may move a man
a sire may claim a son
Yet that selfsame man can also move his own self
and only then doth he truly begin his own game
Bear this in mind: howsoever thou art played
or by whom
thy soul is in thine own keeping alone
—though it be kings or men of power
who presume to play thee. 
For when thou standest before God
thou canst not say
But I was bade by others to do thus
or Virtue was not convenient at the tide
That shall not suffice`,
];

function App() {
  return (
    <div className='screen-scroll-container'>
      <TitleScreen typewriterText={phrases[0]} />
      <AboutScreen typewriterText={[phrases[4], phrases[3]]} />
      <section className='screen-scroll-element w-full'></section>
    </div>
  );
}
export default App;
