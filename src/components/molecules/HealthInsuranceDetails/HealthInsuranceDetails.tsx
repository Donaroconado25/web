import { useTranslations } from "next-intl";

export const HealthInsuranceDetails = () => {
  const t = useTranslations("home.services.details.healthInsurance");
  return (
    <div className="text-sm text-gray-700">
      <h3 className="text-xl font-semibold mb-3">{t("title")}</h3>
      <h4 className="font-semibold mb-2">{t("obamaCareTitle")}</h4>
      <p className="mb-4">{t("obamaCareDescription")}</p>
      <h4 className="font-semibold mb-2">{t("peopleObamaCareTitle")}</h4>
      <p className="mb-4">{t("peopleObamaCareDescription")}</p>
      <h4 className="font-semibold mb-2">{t("advantagesTitle")}</h4>
      <p className="mb-4">{t("advantagesDescription")}</p>
      <h4 className="font-semibold mb-2">{t("benefitsTitle")}</h4>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>{t("benefits.itemOne")}</li>
          <li>{t("benefits.itemTwo")}</li>
          <li>{t("benefits.itemThree")}</li>
          <li>{t("benefits.itemFour")}</li>
          <li>{t("benefits.itemFive")}</li>
          <li>{t("benefits.itemSix")}</li>
          <li>{t("benefits.itemSeven")}</li>
          <li>{t("benefits.itemEight")}</li>
          <li>{t("benefits.itemNine")}</li>
          <li>{t("benefits.itemTen")}</li>
          <li>{t("benefits.itemEleven")}</li>
          <li>{t("benefits.itemTwelve")}</li>
          <li>{t("benefits.itemThirteen")}</li>
          <li>{t("benefits.itemFourteen")}</li>
        </ul>
      </div>
    </div>
  );
};
