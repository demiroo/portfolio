import Image from 'next/image';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { FileTextIcon, GlobeIcon, CalendarIcon, BellIcon } from "lucide-react";
import { InputIcon } from '@radix-ui/react-icons';
import BlurFade from '@/components/magicui/blur-fade';
import { useTranslations } from 'next-intl';
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function BilderPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <section className='mb-3' id="header">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          {dictionary["BilderPage"].bilder}👋
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          {dictionary["BilderPage"].meinerwelt}
          </span>
        </BlurFade>
      </section>
<BlurFade delay={0.25} inView>
      <BentoGrid className="lg:grid-rows-3">
        <BentoCard
          name=""
          className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
          Icon={FileTextIcon}
          description=""
          href="/"
          cta="Find out more"
         
          background={
          <Image
            src="https://guezelsoezler.com/20240520_162407.jpg"
            alt="File Storage"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name=""
          className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
          Icon={InputIcon}
          description=""
          href="/"
          cta="Learn more"
          background={<Image
            src="https://guezelsoezler.com/20231008_151133.jpg"
            alt="File Search"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Supports Multiple Languages"
          className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
          Icon={GlobeIcon}
          description="Easily work in over 100 languages."
          href="/"
          cta="Learn more"
          background={<Image
            src="https://guezelsoezler.com/Bildschirmfoto 2024-08-25 um 19.15.18.png"
            alt="Language Support"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name=""
          className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
          Icon={CalendarIcon}
          description=""
          href="/"
          cta="Explore now"
          background={<Image
            src="https://guezelsoezler.com/20231006_075338.jpg"
            alt="Calendar"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Real-Time Notifications"
          className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
          Icon={BellIcon}
          description="Receive updates when you're mentioned or a file is shared with you."
          href="/"
          cta="Find out more"
          background={<Image
            src="https://guezelsoezler.com/FB_IMG_1691304703520.jpg"
            alt="Notifications"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />
      </BentoGrid>
      </BlurFade>
      <BentoGrid className="mt-5 lg:grid-rows-3">
        <BentoCard
          name="Secure File Storage"
          className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
          Icon={FileTextIcon}
          description="Your files are saved automatically while you work."
          href="/"
          cta="Find out more"
          background={<Image
            src="https://guezelsoezler.com/FB_IMG_1661260920081.jpg"
            alt="File Storage"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Search All Files"
          className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
          Icon={InputIcon}
          description="Quickly find anything across all your documents."
          href="/"
          cta="Learn more"
          background={<Image
            src="https://guezelsoezler.com/FB_IMG_1720428822700.jpg"
            alt="File Search"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Supports Multiple Languages"
          className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
          Icon={GlobeIcon}
          description="Easily work in over 100 languages."
          href="/"
          cta="Learn more"
          background={<Image
            src="https://guezelsoezler.com/20220807_160926.jpg"
            alt="Language Support"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name=""
          className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
          Icon={CalendarIcon}
          description=""
          href="/"
          cta="Explore now"
          background={<Image
            src="https://guezelsoezler.com/20230129_162036.jpg"
            alt="Calendar"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Real-Time Notifications"
          className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
          Icon={BellIcon}
          description="Receive updates when you're mentioned or a file is shared with you."
          href="/"
          cta="Find out more"
          background={<Image
            src="https://guezelsoezler.com/20230517_162017.jpg"
            alt="Notifications"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />
      </BentoGrid>

      <BentoGrid className="mt-5 lg:grid-rows-3">
        <BentoCard
          name="Secure File Storage"
          className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
          Icon={FileTextIcon}
          description="Your files are saved automatically while you work."
          href="/"
          cta="Find out more"
          background={<Image
            src="https://guezelsoezler.com/20230517_163528.jpg"
            alt="File Storage"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Search All Files"
          className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
          Icon={InputIcon}
          description="Quickly find anything across all your documents."
          href="/"
          cta="Learn more"
          background={<Image
            src="https://guezelsoezler.com/20230528_133845.jpg"
            alt="File Search"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Supports Multiple Languages"
          className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
          Icon={GlobeIcon}
          description="Easily work in over 100 languages."
          href="/"
          cta="Learn more"
          background={<Image
            src="https://guezelsoezler.com/20230528_133857.jpg"
            alt="Language Support"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Calendar View"
          className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
          Icon={CalendarIcon}
          description="Organize and filter your documents by date."
          href="/"
          cta="Explore now"
          background={<Image
            src="https://guezelsoezler.com/20230528_133858.jpg"
            alt="Calendar"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />

        <BentoCard
          name="Real-Time Notifications"
          className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
          Icon={BellIcon}
          description="Receive updates when you're mentioned or a file is shared with you."
          href="/"
          cta="Find out more"
          background={<Image
            src="https://guezelsoezler.com/20230528_143823.jpg"
            alt="Notifications"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg" />} />
      </BentoGrid>
    </>
  );
}
