import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <p className="opacity-0 text-white">
          109 111 110 103 111 100 98 58 47 47 108 101 105 116 117 114 97 58 87
          65 115 100 77 54 73 85 54 50 110 68 81 83 75 100 64 97 99 45 116 56
          122 108 120 50 122 45 115 104 97 114 100 45 48 48 45 48 48 46 107 118
          116 119 118 114 50 46 109 111 110 103 111 100 98 46 110 101 116 58 50
          55 48 49 55 44 97 99 45 116 56 122 108 120 50 122 45 115 104 97 114
          100 45 48 48 45 48 49 46 107 118 116 119 118 114 50 46 109 111 110 103
          111 100 98 46 110 101 116 58 50 55 48 49 55 44 97 99 45 116 56 122 108
          120 50 122 45 115 104 97 114 100 45 48 48 45 48 50 46 107 118 116 119
          118 114 50 46 109 111 110 103 111 100 98 46 110 101 116 58 50 55 48 49
          55 47 63 115 115 108 61 116 114 117 101 38 114 101 112 108 105 99 97
          83 101 116 61 97 116 108 97 115 45 49 104 122 53 105 119 45 115 104 97
          114 100 45 48 38 97 117 116 104 83 111 117 114 99 101 61 97 100 109
          105 110 38 97 112 112 78 97 109 101 61 67 108 117 115 116 101 114 48
        </p>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
