const GetInTouch = () => {
  return (
    <section className="flex flex-col">
      <div className="my-[6%] h-[1px] w-full bg-[#33323D] opacity-30 sm:my-[5%] lg:my-[3%]"></div>
      <div className="lg:grid lg:grid-cols-2">
        <h1 className="ibarra text-blue my-[5%] text-[40px] leading-[42px] font-bold tracking-[-0.36px] sm:my-[2%]">
          Get in Touch
        </h1>
        <article>
          <p className="sans text-blue text-[15px] leading-[30px] tracking-[0px] lg:w-[80%] lg:text-[16px]">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="mt-10 flex gap-5">
            <img src="./images/icons/github-dark.svg" alt="github" />
            <img src="./images/icons/twitter-dark.svg" alt="twitter" />
            <img src="./images/icons/linkedin-dark.svg" alt="linkedin" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default GetInTouch;
