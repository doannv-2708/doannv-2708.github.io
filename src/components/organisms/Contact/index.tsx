import React, { useEffect } from 'react';
import ContactSectionProps from 'components/organisms/Contact/types';
import Animated from 'components/animations';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { forwardRef } from 'react';

const Contact = forwardRef<HTMLElement | undefined, ContactSectionProps>(
  ({ title, content }: ContactSectionProps, ref) => {
    const { email } = content;
    const controls = useAnimation();
    const [refView, inView] = useInView({
      threshold: 0.4,
    });

    useEffect(() => {
      if (inView) {
        controls.start('show');
      }
    }, [controls, inView]);

    return (
      <section
        id="contact"
        ref={section => {
          refView(section);
          if (ref) {
            if (typeof ref === 'function') {
              ref(section);
            } else {
              ref.current = section;
            }
          }
        }}
      >
        <h2 className="flex justify-center text-3xl font-bold text-gray-600 md:justify-start">
          <Animated.Letter text={title} animate={controls} custom={0} delay={0.6} />
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <a
            href={`mailto:${email}`}
            className="relative mt-6 text-4xl font-bold text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 ring-offset-8"
          >
            <Animated.Letter text={email} animate={controls} custom={1} delay={0.6} />
            <Animated.Highlighter
              className="h-4 bottom-0.5"
              rad={8}
              animate={controls}
              custom={2}
              delay={0.6}
            />
          </a>
        </div>
      </section>
    );
  }
);

export default Contact;
