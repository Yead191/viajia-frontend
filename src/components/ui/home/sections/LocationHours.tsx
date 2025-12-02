"use client";
import InfoCard from "../../lockers/sections/sizes-section/Info/InfoCard";
import { Clock, Mail, Phone } from "lucide-react";
import HoursList from "../../lockers/sections/sizes-section/Info/HoursList";

export default function LocationHours({ t, locationHeading }: any) {
  // console.log(t);
  // const lat = 43.36605;
  // const lng = -5.85415;

  return (
    <section className="py-16 lg:py-20 lg:pb-40  text-[#F1F1F1]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl 2xl:text-[28px] font-semibold">
          {locationHeading?.title}
        </h2>
        <p className="text-[#ABABAB] mt-3 lg:text-lg">
          {locationHeading?.address}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8 container items-center mx-auto">
        {/* MAP */}
        <div className="w-full h-[300px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg">
          {/* <MapContainer
            center={[lat, lng]}
            zoom={250}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[lat, lng]} icon={markerIcon}>
              <Popup>Your Location</Popup>
            </Marker>
          </MapContainer> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512.7419391644452!2d-5.854334440872308!3d43.366434119764875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cfdad96e1d1%3A0x2d824f46b485f9fb!2sC.%20Ur%C3%ADa%2C%2076%2C%2033003%20Oviedo%2C%20Asturias%2C%20Spain!5e0!3m2!1sen!2sbd!4v1764655724085!5m2!1sen!2sbd"
            width="100%"
            height="380"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Opening Hours Card */}
        <div>
          <InfoCard
            title={t?.hoursTitle}
            icon={<Clock className="w-5 h-5" />}
            delay={100}
            isHome={false}
          >
            <HoursList t={t} />
          </InfoCard>
          <div
            data-aos="fade-up"
            data-aos-delay={150}
            className="mt-6 flex flex-col md:flex-row lg:items-center gap-4 lg:gap-8"
          >
            <div className="flex items-center gap-3 ">
              <div className=" bg-[#45EA69]/30 p-3 rounded-full">
                <Phone className="w-4 h-4 text-[#45EA69]" />
              </div>
              <div>
                <p className="text-[#ABABAB]  mb-1">{t.satLabel}</p>
                <p className="text-primary flex items-center gap-2 text-sm">
                  +34 640753793
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" bg-[#FFCB20]/30 p-3 rounded-full">
                <Mail className="w-4 h-4 text-[#FFCB20]" />
              </div>
              <div>
                <p className="text-[#ABABAB]  mb-1">{t.emailLabel}</p>
                <p className="text-primary flex items-center gap-2 text-sm">
                  contacto@viajia.es
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" bg-[#F66E10]/30 p-3 rounded-full">
                <Clock className="w-4 h-4 text-[#F66E10]" />
              </div>
              <div>
                <p className="text-[#ABABAB]  mb-1">{t.supportHoursLabel}</p>
                <p className="text-primary flex items-center gap-2 text-sm">
                  {t.supportHoursValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
