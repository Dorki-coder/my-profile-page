import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Flag from "react-flagkit";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTelegram, FaVk } from "react-icons/fa";
import Select from "react-select";
import { Tooltip } from "react-tooltip";
import "./App.css";

const languageOptions = [
  { value: "en", label: "English", flag: "US" },
  { value: "ru", label: "Русский", flag: "RU" },
  { value: "pt", label: "Português", flag: "PT" },
];

function App() {
  const { t, i18n } = useTranslation();
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipId, setTooltipId] = useState("");

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const handleCopy = (text, id) => {
    setTooltipText(`Copied: ${text}`);
    setTooltipId(id);
  };

  useEffect(() => {
    if (tooltipId) {
      const timer = setTimeout(() => {
        setTooltipId("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [tooltipId]);

  return (
    <div className="App">
      <div className="language-switcher">
        <Select
          classNamePrefix="Select"
          defaultValue={languageOptions[0]}
          options={languageOptions}
          onChange={handleChange}
          formatOptionLabel={(option) => (
            <div className="language-option">
              <Flag country={option.flag} />
              <span>{option.label}</span>
            </div>
          )}
          styles={{
            control: (base) => ({
              ...base,
              borderColor: "#0073b1",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected ? "#0073b1" : "#fff",
              color: state.isSelected ? "#fff" : "#333",
            }),
          }}
        />
      </div>
      <div className="container">
        <h1>{t("welcome")}</h1>
        <p>{t("contactInfo")}</p>
        <ul>
          <li>
            <span>{t("phone")}: </span>
            <CopyToClipboard
              text={t("phoneNumber")}
              onCopy={() => handleCopy(t("phoneNumber"), "phoneTooltip")}
            >
              <span className="copyable" data-tooltip-id="phoneTooltip">
                {t("phoneNumber")}
              </span>
            </CopyToClipboard>
          </li>
          <li>
            <span>{t("email")}: </span>
            <CopyToClipboard
              text={t("emailAddress")}
              onCopy={() => handleCopy(t("emailAddress"), "emailTooltip")}
            >
              <span className="copyable" data-tooltip-id="emailTooltip">
                {t("emailAddress")}
              </span>
            </CopyToClipboard>
          </li>
          <li>
            <span>{t("nif")}: </span>
            <CopyToClipboard
              text={t("nifNumber")}
              onCopy={() => handleCopy(t("nifNumber"), "nifTooltip")}
            >
              <span className="copyable" data-tooltip-id="nifTooltip">
                {t("nifNumber")}
              </span>
            </CopyToClipboard>
          </li>
          <li>
            <span>{t("city")}: </span>
            <CopyToClipboard
              text={t("cityName")}
              onCopy={() => handleCopy(t("cityName"), "cityTooltip")}
            >
              <span className="copyable" data-tooltip-id="cityTooltip">
                {t("cityName")}
              </span>
            </CopyToClipboard>
          </li>
          <li>
            <span>{t("address")}: </span>
            <CopyToClipboard
              text={t("addressDetail")}
              onCopy={() => handleCopy(t("addressDetail"), "addressTooltip")}
            >
              <span className="copyable" data-tooltip-id="addressTooltip">
                {t("addressDetail")}
              </span>
            </CopyToClipboard>
          </li>
        </ul>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/daniil-semenov-9b8019252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon linkedin" />
          </a>

          <div>
            <a
              href="https://t.me/dorkitg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="social-icon telegram" />
            </a>
            <div className="social-media__description">@DorkiTG</div>
          </div>

          <a
            href="https://vk.com/dorki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVk className="social-icon vk" />
          </a>

          <div>
            <a
              href="https://github.com/Dorki-coder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon github" />
            </a>
            <div className="social-media__description">Dorki-coder</div>
          </div>
        </div>
      </div>
      <Tooltip
        id="phoneTooltip"
        isOpen={tooltipId === "phoneTooltip"}
        effect="solid"
      >
        {tooltipText}
      </Tooltip>
      <Tooltip
        id="emailTooltip"
        isOpen={tooltipId === "emailTooltip"}
        effect="solid"
      >
        {tooltipText}
      </Tooltip>
      <Tooltip
        id="nifTooltip"
        isOpen={tooltipId === "nifTooltip"}
        effect="solid"
      >
        {tooltipText}
      </Tooltip>
      <Tooltip
        id="cityTooltip"
        isOpen={tooltipId === "cityTooltip"}
        effect="solid"
      >
        {tooltipText}
      </Tooltip>
      <Tooltip
        id="addressTooltip"
        isOpen={tooltipId === "addressTooltip"}
        effect="solid"
      >
        {tooltipText}
      </Tooltip>
    </div>
  );
}

export default App;
