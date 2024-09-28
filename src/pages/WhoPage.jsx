import { CircleImage, Container, CoverSection, Services } from "../components";

export default function AboutPage() {
  return (
    <>
      <CoverSection
        title="ABOUT US"
        description="Discover who we are and what drives us to deliver exceptional security services. At Stead Fast Security, we are committed to safeguarding your assets and ensuring a safe environment through our expert team, cutting-edge technology, and a passion for excellence."
      />

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
        <CircleImage
          imageUrl="/images/security/placeholder.jpg"
          sideImages={[
            "/images/security/placeholder.jpg",
            "/images/security/placeholder.jpg",
          ]}
        />
        <div className={`flex flex-col gap-8 justify-center `}>
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Stead Fast Security
          </h2>
          <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
            Stead Fast Security Company (Private) Limited was established in
            2007 with a vision to provide exceptional security services in
            Pakistan. Our leadership team comprises experienced security
            professionals committed to delivering top-notch solutions.
          </p>

          <div className="space-y-8">
            <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h6 className="text-primary text-xl font-bold">VISION :</h6>
              <p className="text-foregroundMuted">
                Protecting Lives, Securing Futures. At Stead Fast Security, our
                vision is to become the leading private security provider in
                Pakistan, delivering top-notch services that ensure the safety
                and security of our clients, their assets, and the community. We
                strive to set the standard for excellence in the security
                industry, fostering trust and peace of mind through our
                unwavering commitment to exceptional service.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h6 className="text-primary text-xl font-bold">MISSION :</h6>
              <p className="text-foregroundMuted">
                Delivering Excellence in Security. Our mission is to provide
                expert security solutions tailored to meet the unique needs of
                our clients, fostering trust and peace of mind through our
                unwavering commitment to excellence.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-primary text-2xl font-bold">
                We are dedicated to:
              </h4>
              <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
                <li>Delivering reliable and responsive security services</li>
                <li>
                  Empowering our teams through continuous training and
                  development
                </li>
                <li>Building long-term relationships with our clients</li>
                <li>Investing in cutting-edge technology and equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <CeoMessage />
      <DirectorMessage />
      <Services />
    </>
  );
}

function CeoMessage({}) {
  return (
    <Container className="px-4 py-8">
      <div className="bg-background p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 flex flex-wrap flex-col lg:flex-row gap-4">
        {/* Left side: Image */}
        <div className="flex justify-center items-center mx-auto">
          <img
            src="/images/placeholder.jpg"
            alt="CEO"
            className="w-96 object-cover"
          />
        </div>

        {/* Right side: Text content */}
        <div className="flex-1 pl-8">
          <div className="mb-4">
            <h6 className="text-primary text-xl font-bold">
              Col (R) Haneef Shah
            </h6>
            <p className="text-foregroundMuted">CEO</p>
          </div>

          <p className="text-foregroundMuted leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            tempora quia nemo quam distinctio delectus saepe sint harum omnis
            natus tempore velit modi voluptates, aspernatur architecto repellat
            nisi ad totam deserunt ipsa illum blanditiis itaque enim. Maxime
            exercitationem soluta eius, autem officia consequatur, quo sit,
            voluptate voluptates ipsa officiis ratione quisquam repellendus quia
            debitis? Culpa doloribus quisquam et praesentium quia?
          </p>
          <p className="text-foregroundMuted leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            provident, necessitatibus tempore quisquam animi modi, odit eum
            inventore debitis, magni aliquid repudiandae mollitia? Dolorem
            fugiat nobis neque sapiente similique ex mollitia minus reiciendis
            architecto cupiditate, nisi blanditiis temporibus commodi accusamus
            sequi in labore, odit consequuntur voluptatem perferendis saepe
            itaque quod! Harum eligendi expedita quisquam. Maiores laborum omnis
            magni a velit ratione, perferendis placeat harum dolore? Ex
            molestiae suscipit nulla esse?
          </p>
          <p className="text-foregroundMuted leading-relaxed mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            laudantium nobis quo ipsa similique sint saepe ullam cumque, unde
            assumenda?
          </p>
          <p className="text-foregroundMuted leading-relaxed mt-4 font-semibold">
            Thank you for Considering us!
          </p>
          <p className="text-foregroundMuted leading-relaxed">Sincerely,</p>
        </div>
      </div>
    </Container>
  );
}

function DirectorMessage({}) {
  return (
    <Container className="px-4 py-8">
      <div className="bg-background p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 flex flex-wrap flex-col lg:flex-row gap-4">
        {/* Left side: Image */}
        <div className="flex justify-center items-center mx-auto">
          <img
            src="/images/profile.png"
            alt="CEO"
            className="w-96 object-cover"
          />
        </div>

        {/* Right side: Text content */}
        <div className="flex-1 pl-8">
          <div className="mb-4">
            <h6 className="text-primary text-xl font-bold">
              Col (R) Abdul Rauf
            </h6>
            <p className="text-foregroundMuted">Diractor</p>
          </div>

          <p className="text-foregroundMuted leading-relaxed">
            Security services have been around for quite a while now. Even
            though a lot of us might want to believe that we are safe in today’s
            world, the truth is you can’t ever be completely safe from theft or
            bodily harm. Security threats to life and property have become a
            common feature, especially in Pakistan, where protection should not
            be just for business, but also for the wellbeing of your family and
            premises. We would like to help you avert these threats.
          </p>
          <p className="text-foregroundMuted leading-relaxed mt-4">
            At SSC, we understand that security staff is often the first point
            of contact that people have when they come to premises, an event,
            venue, or Business Centre. With that in mind, we try to ensure that
            everyone gets a warm welcome from a friendly and knowledgeable
            member of our security staff every time. Our professionals work very
            hard to create and maintain a fearless environment at your workplace
            for smooth functioning of your organization’s operations.
          </p>
          <p className="text-foregroundMuted leading-relaxed mt-4">
            Our motto is: "We are Prepared to Protect & Secure People and
            Premises against all kinds of Physical Threats."
          </p>
          <p className="text-foregroundMuted leading-relaxed mt-4 font-semibold">
            Thank you for Considering us!
          </p>
          <p className="text-foregroundMuted leading-relaxed">Sincerely,</p>
        </div>
      </div>
    </Container>
  );
}
