import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-8">
      <div className="flex justify-center">
        <Image
          src="/about-photo.jpg"
          alt="Avvai Ketheeswaran"
          width={400}
          height={500}
          className="shadow-lg object-cover"
          priority
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          Hi, I&apos;m Avvai!
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6 italic">
          (It rhymes with &ldquo;hey&rdquo; — "ah-vey")
        </p>
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>
            I'm a multidisciplinary human who lives in Canada and loves books, tech, and riding my bike. I'm naturally curious about things, and sometimes overly enthusiastic about other things. 
          </p>
          <p>
            
            Please click around. Here you'll learn about my publishing experience, software development, and my newest adventure -- a mobile bicycle bookshop/community art space. 

          </p>
          <p>
             [In Progress] I also share some things about the long bicycle trips I've been on, if you're curious! 
          </p>
        </div>
      </div>
    </div>
  );
}
