import { useTranslations } from "next-intl";

export const AccidentInsuranceDetails = () => {
  const t = useTranslations("home.services.details.accidentInsurance");
  return (
    <div className="text-sm text-gray-700">
      <h3 className="text-xl font-semibold mb-3">{t("title")}</h3>
      <p className="mb-4">{t("description")}</p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>{t("typeOne")}</li>
        <li>{t("typeTwo")}</li>
        <li>{t("typeThree")}</li>
        <li>{t("typeFour")}</li>
      </ul>
      <h4 className="font-semibold mb-2">{t("benefits.title")}</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>{t("benefits.itemOne")}</li>
        <li>{t("benefits.itemTwo")}</li>
        <li>{t("benefits.itemThree")}</li>
      </ul>
    </div>
  );
};
