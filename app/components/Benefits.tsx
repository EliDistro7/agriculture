'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Shield } from "lucide-react";
import { Truck } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";

const BenefitsSection = () => {
    const { language } = useLanguage();
  
    const benefits = [
      {
        icon: <Shield className="w-8 h-8 text-primary-600" />,
        title: { en: "Quality Guarantee", sw: "Hakiki ya Ubora" },
        description: {
          en: "All our products come with manufacturer warranties",
          sw: "Bidhaa zote zina hakiki ya mzalishaji"
        }
      },
      {
        icon: <Truck className="w-8 h-8 text-primary-600" />,
        title: { en: "Free Delivery", sw: "Uwasilishaji Bure" },
        description: {
          en: "On orders above 5M TZS within our service areas",
          sw: "Kwa maagizo ya zaidi ya TZS Milioni 5 kwenye maeneo tunayohudumia"
        }
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {language === 'en' 
                  ? 'Why Farmers Choose Us' 
                  : 'Kwa Nini Wakulima Wanachagua Sisi'}
              </h2>
            </div>
          </Fade>
  
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 mb-4 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title[language]}
                  </h3>
                  <p className="text-gray-700">
                    {benefit.description[language]}
                  </p>
                </div>
              </Fade>
            ))}
            
            <Fade direction="up" delay={200} triggerOnce>
              <div className="bg-primary-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'en' 
                    ? 'Financing Options Available' 
                    : 'Mikopo Inapatikana'}
                </h3>
                <p className="mb-4">
                  {language === 'en'
                    ? 'We partner with financial institutions to help you acquire equipment'
                    : 'Tunaungana na taasisi za kifedha kukusaidia kupata vifaa'}
                </p>
                <Link
                  href="/financing"
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  };

  export default BenefitsSection