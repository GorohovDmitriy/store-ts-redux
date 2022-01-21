import React, { FC } from "react";

interface SvgProps {
  id: string;
}

const GlobalSvg: FC<SvgProps> = ({ id }) => {
  switch (id) {
    case "logo":
      return (
        <svg
          _ngcontent-dpw-c137=""
          width="227"
          height="50"
          viewBox="0 0 227 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ng-star-inserted"
        >
          <path
            _ngcontent-dpw-c137=""
            d="M4.51241 14.5357C3.31938 14.5844 2.15504 14.1632 1.27104 13.3631C0.864315 13.0029 0.540353 12.5594 0.321272 12.0629C0.102191 11.5665 -0.00685154 11.0288 0.00158728 10.4865C-0.0144498 9.94432 0.0912054 9.40546 0.310835 8.90923C0.530464 8.413 0.858521 7.97194 1.27104 7.61826C2.17236 6.8536 3.32985 6.45595 4.51241 6.50469C5.70328 6.4517 6.87021 6.84949 7.77915 7.61826C8.18638 7.97535 8.50973 8.41746 8.7262 8.91317C8.94268 9.40889 9.04698 9.94604 9.03169 10.4865C9.04717 11.0343 8.94319 11.579 8.72695 12.083C8.5107 12.5869 8.18733 13.038 7.77915 13.4053C6.87427 14.1828 5.70598 14.5871 4.51241 14.5358V14.5357ZM8.2744 44.4665H0.445961V19.1586H8.2744V44.4665V44.4665ZM28.7846 33.0779H15.2267V27.6115H28.7846V33.0779V33.0779ZM34.6411 42.4925V34.5795C37.3769 36.8944 40.8443 38.173 44.4329 38.1901C45.3206 38.2014 46.2066 38.1108 47.0734 37.9201C47.7388 37.7722 48.3761 37.5187 48.9608 37.1693C49.4245 36.8882 49.8112 36.4969 50.0863 36.0305C50.3363 35.5971 50.4649 35.1047 50.4587 34.6048C50.4691 33.941 50.261 33.2921 49.8663 32.7573C49.417 32.1635 48.8671 31.6525 48.2414 31.2473C47.4669 30.7324 46.6485 30.2863 45.7955 29.9144C44.8561 29.4842 43.8405 29.0455 42.7488 28.5984C40.3604 27.7213 38.2265 26.2695 36.5369 24.3721C35.1614 22.6692 34.4384 20.5342 34.4973 18.3488C34.4484 16.694 34.8303 15.0548 35.6059 13.5909C36.3422 12.2715 37.3838 11.1465 38.6442 10.3092C40.005 9.42336 41.512 8.7837 43.0958 8.41965C44.8514 8.00943 46.6497 7.80836 48.4529 7.82065C50.0979 7.80614 51.7417 7.91613 53.37 8.14966C54.7234 8.35037 56.0513 8.69542 57.3307 9.17889V16.5687C56.7171 16.1467 56.0655 15.7823 55.3843 15.4805C54.6788 15.1678 53.952 14.9057 53.2092 14.6959C52.4809 14.4958 51.7402 14.3436 50.9919 14.2404C50.2988 14.1491 49.6006 14.1012 48.9014 14.0971C48.068 14.0889 47.2362 14.1739 46.4218 14.3502C45.7583 14.4959 45.1217 14.7434 44.5346 15.0841C44.0581 15.3651 43.6505 15.7484 43.3413 16.2061C43.0633 16.645 42.9193 17.155 42.9266 17.674C42.9156 18.2402 43.0779 18.7963 43.392 19.2683C43.7553 19.7901 44.2079 20.2441 44.7292 20.6096C45.4001 21.0761 46.1076 21.4879 46.8449 21.8412C47.6658 22.2461 48.6053 22.6595 49.6462 23.0897C50.9634 23.6312 52.2415 24.2626 53.4716 24.9794C54.5409 25.5971 55.5204 26.3578 56.3829 27.2403C57.1862 28.0718 57.8187 29.0519 58.2448 30.1254C58.6978 31.3272 58.9161 32.6043 58.8879 33.8878C58.9472 35.6184 58.5596 37.3351 57.7623 38.8735C57.03 40.197 55.9768 41.3165 54.6987 42.1298C53.3226 43.0017 51.7959 43.611 50.1964 43.9266C48.4149 44.2954 46.5994 44.4763 44.7799 44.4666C42.9153 44.4752 41.0539 44.3114 39.2196 43.9772C37.6299 43.7037 36.088 43.2037 34.6411 42.4925L34.6411 42.4925ZM78.0569 43.5553C76.4073 44.2571 74.6172 44.5689 72.8266 44.4665C67.3088 44.4665 64.547 41.6095 64.5413 35.8955V24.3045H60.4283V18.5428H64.5413V13.0846L72.3527 10.8576V18.5427H78.0569V24.3045H72.3527V34.5289C72.3527 37.1693 73.4022 38.4881 75.501 38.4854C76.4005 38.4681 77.2804 38.2212 78.0568 37.7683V43.5553H78.0569ZM94.3738 44.4665C92.5577 44.5684 90.7394 44.3074 89.0259 43.699C87.3124 43.0905 85.7382 42.1468 84.3958 40.9234C83.1589 39.6542 82.1981 38.1443 81.5733 36.4881C80.9486 34.8319 80.6735 33.065 80.7651 31.298C80.6623 29.4877 80.9447 27.6763 81.5937 25.9825C82.2428 24.2887 83.2439 22.7509 84.5312 21.47C87.3302 19.0027 90.9895 17.7303 94.7208 17.9269C96.528 17.824 98.3375 18.0847 100.042 18.6934C101.746 19.3021 103.309 20.2464 104.64 21.47C105.852 22.7048 106.796 24.1746 107.415 25.7882C108.034 27.4019 108.313 29.1251 108.236 30.8509C108.333 32.6757 108.055 34.5011 107.417 36.2145C106.779 37.9279 105.797 39.4931 104.529 40.8136C103.17 42.0715 101.57 43.0433 99.8248 43.671C98.0799 44.2986 96.2259 44.5691 94.3738 44.4665H94.3738ZM94.577 23.908C93.7586 23.8654 92.9417 24.0149 92.192 24.3446C91.4423 24.6743 90.7808 25.1749 90.2607 25.8061C89.1448 27.3749 88.6013 29.2772 88.7204 31.1966C88.7204 36.0558 90.6895 38.4854 94.6277 38.4854C98.3768 38.4854 100.253 35.9912 100.256 31.0027C100.256 26.2701 98.3628 23.9052 94.577 23.908L94.577 23.908ZM129.885 25.5868C128.868 25.057 127.732 24.7929 126.584 24.8192C125.817 24.7868 125.054 24.9394 124.358 25.2639C123.663 25.5885 123.056 26.0754 122.59 26.6834C121.559 28.1708 121.053 29.957 121.151 31.7619L121.098 44.4665H113.27L113.323 18.5428H121.151V23.2416H121.253C122.497 19.8081 124.728 18.0928 127.947 18.0957C128.606 18.0693 129.264 18.1695 129.885 18.3909V25.5868L129.885 25.5868ZM156.146 33.4238H139.584C139.846 37.0934 142.168 38.9297 146.549 38.9325C149.142 38.9868 151.696 38.3019 153.912 36.9585V42.5937C151.061 43.9525 147.92 44.5954 144.763 44.4665C143.024 44.5732 141.281 44.3268 139.64 43.7425C137.999 43.1581 136.494 42.2478 135.217 41.0667C134.041 39.7965 133.134 38.3027 132.551 36.6749C131.968 35.047 131.72 33.3186 131.823 31.5931C131.726 29.7672 132.001 27.9407 132.633 26.2239C133.264 24.5072 134.238 22.9359 135.496 21.605C136.666 20.4073 138.071 19.4627 139.623 18.8298C141.175 18.197 142.841 17.8897 144.518 17.9269C146.102 17.8311 147.688 18.0744 149.169 18.6404C150.651 19.2064 151.994 20.0821 153.108 21.2086C155.233 23.6843 156.321 26.8802 156.146 30.1338V33.4238L156.146 33.4238ZM148.885 28.6237C148.885 25.0047 147.412 23.1938 144.467 23.191C143.842 23.1923 143.226 23.3323 142.662 23.6008C142.099 23.8693 141.602 24.2595 141.209 24.7431C140.267 25.8366 139.683 27.1904 139.533 28.6237L148.885 28.6237Z"
            fill="white"
          ></path>
          <path
            _ngcontent-dpw-c137=""
            d="M224.104 45.6581C223.921 45.6477 223.738 45.686 223.574 45.769C223.41 45.8521 223.272 45.977 223.172 46.131C222.965 46.4313 222.86 46.7906 222.874 47.1551L222.873 49.9957H221.699L221.7 46.3094C221.7 45.7208 221.697 45.1727 221.666 44.6747H222.671L222.726 45.6644H222.747C222.859 45.3421 223.061 45.0585 223.329 44.8469C223.572 44.6722 223.862 44.576 224.161 44.5714C224.261 44.569 224.361 44.5763 224.461 44.5933V45.6926C224.342 45.6745 224.223 45.663 224.104 45.6581ZM220.609 47.0392C220.612 47.2101 220.6 47.3809 220.574 47.5498H217.14C217.132 47.7723 217.173 47.9939 217.26 48.199C217.347 48.4041 217.478 48.5876 217.644 48.7367C217.969 48.9933 218.376 49.1235 218.789 49.1031C219.27 49.1136 219.749 49.0317 220.199 48.862L220.34 49.6762C219.803 49.9041 219.223 50.0131 218.64 49.9958C218.288 50.0158 217.936 49.9627 217.605 49.8398C217.275 49.7169 216.973 49.5268 216.721 49.2817C216.484 49.0232 216.302 48.7203 216.184 48.3906C216.066 48.061 216.016 47.7112 216.036 47.3619C216.008 46.6525 216.232 45.956 216.669 45.3951C216.885 45.1203 217.165 44.9006 217.483 44.7541C217.801 44.6077 218.15 44.5386 218.501 44.5526C218.836 44.5352 219.17 44.6034 219.472 44.7508C219.773 44.8983 220.032 45.12 220.224 45.3951C220.48 45.9055 220.611 46.4687 220.609 47.0393L220.609 47.0392ZM219.573 46.7324C219.583 46.4205 219.504 46.1122 219.346 45.843C219.247 45.689 219.109 45.564 218.946 45.4808C218.783 45.3977 218.6 45.3595 218.417 45.3701C218.236 45.3688 218.058 45.4102 217.896 45.4908C217.734 45.5713 217.593 45.6888 217.486 45.8337C217.286 46.0938 217.166 46.4059 217.14 46.7324L219.573 46.7324ZM214.906 42.2821L214.906 49.9958H213.684L213.684 42.2821H214.906ZM212.452 42.2821L212.453 49.9958H211.279L211.279 42.2821H212.452ZM210.211 47.0392C210.208 47.2101 210.194 47.3806 210.17 47.5497H206.795C206.787 47.7726 206.829 47.9944 206.916 48.1995C207.004 48.4047 207.136 48.588 207.303 48.7367C207.432 48.8693 207.59 48.9711 207.764 49.0345C207.939 49.0979 208.125 49.1214 208.31 49.1031C208.795 49.1136 209.277 49.0318 209.731 48.862L209.912 49.6762C209.355 49.9002 208.758 50.0089 208.157 49.9958C207.828 50.0059 207.501 49.9476 207.195 49.8247C206.89 49.7017 206.614 49.5168 206.384 49.2817C206.146 49.0238 205.962 48.7212 205.843 48.3915C205.723 48.0619 205.671 47.7118 205.689 47.3619C205.661 46.6511 205.889 45.9537 206.33 45.3951C206.531 45.1352 206.788 44.9243 207.083 44.7783C207.377 44.6324 207.701 44.5552 208.03 44.5526C208.364 44.534 208.698 44.6017 208.998 44.7494C209.298 44.897 209.555 45.1194 209.744 45.3951C210.068 45.8811 210.231 46.4561 210.211 47.0393L210.211 47.0392ZM209.102 46.7323C209.109 46.4194 209.027 46.1108 208.864 45.843C208.766 45.6891 208.628 45.5642 208.464 45.4811C208.301 45.398 208.119 45.3597 207.936 45.3701C207.775 45.3729 207.617 45.4171 207.478 45.4983C207.338 45.5795 207.222 45.695 207.141 45.8337C206.948 46.0974 206.828 46.4076 206.795 46.7324L209.102 46.7323ZM204.894 48.3986C204.899 48.619 204.853 48.8375 204.761 49.0381C204.669 49.2386 204.533 49.416 204.364 49.5572C203.934 49.8696 203.41 50.0246 202.879 49.9957C202.35 50.0134 201.825 49.8913 201.358 49.6418L201.607 48.7806C201.999 49.0105 202.446 49.1295 202.901 49.125C203.484 49.125 203.796 48.9152 203.796 48.4892C203.797 48.3976 203.78 48.3067 203.745 48.2218C203.711 48.1369 203.66 48.0596 203.595 47.9944C203.386 47.8362 203.152 47.7154 202.901 47.6375C201.973 47.2866 201.5 46.8044 201.5 46.1405C201.499 45.9274 201.544 45.7165 201.631 45.522C201.719 45.3275 201.847 45.1539 202.007 45.0129C202.399 44.7074 202.888 44.5509 203.385 44.5715C203.844 44.558 204.298 44.6649 204.703 44.8814L204.455 45.7019C204.131 45.5149 203.764 45.4155 203.39 45.4138C203.184 45.4015 202.981 45.4627 202.816 45.5862C202.752 45.6399 202.701 45.707 202.665 45.7828C202.63 45.8585 202.612 45.941 202.612 46.0246C202.613 46.1092 202.633 46.1925 202.67 46.2684C202.708 46.3443 202.762 46.4108 202.829 46.463C203.042 46.6204 203.28 46.7411 203.533 46.82C204.455 47.1614 204.894 47.6782 204.894 48.3985V48.3986ZM200.691 47.0392C200.691 47.2108 200.673 47.3819 200.637 47.5497H197.142C197.131 47.7729 197.171 47.9957 197.259 48.2012C197.347 48.4068 197.48 48.5898 197.649 48.7367C197.971 48.9926 198.374 49.1229 198.785 49.1031C199.271 49.1126 199.754 49.0309 200.21 48.862L200.383 49.6762C199.826 49.9014 199.229 50.0102 198.628 49.9958C198.278 50.0147 197.927 49.961 197.599 49.8381C197.27 49.7152 196.971 49.5257 196.719 49.2817C196.483 49.0229 196.3 48.72 196.182 48.3905C196.064 48.061 196.012 47.7114 196.03 47.3619C196 46.6502 196.23 45.9518 196.675 45.3951C196.892 45.1209 197.17 44.9016 197.487 44.7551C197.805 44.6087 198.153 44.5393 198.502 44.5526C198.837 44.5353 199.171 44.6037 199.472 44.7511C199.773 44.8986 200.032 45.1202 200.223 45.3951C200.538 45.885 200.701 46.4571 200.691 47.0393V47.0392ZM199.571 46.7323C199.588 46.4183 199.505 46.1068 199.333 45.843C199.235 45.6887 199.097 45.5635 198.933 45.4803C198.77 45.3972 198.587 45.3591 198.403 45.3701C198.225 45.3689 198.049 45.4103 197.89 45.491C197.732 45.5717 197.595 45.6892 197.491 45.8337C197.288 46.0924 197.167 46.4051 197.142 46.7324L199.571 46.7323ZM194.361 49.9958C194.308 49.6826 194.146 49.1031 193.947 48.173C193.904 47.794 193.745 47.4374 193.491 47.152C193.372 47.0432 193.232 46.9598 193.079 46.907C192.927 46.8543 192.765 46.8332 192.604 46.8451H191.895L191.895 49.9957H190.715L190.715 42.7549C191.339 42.6524 191.971 42.6053 192.604 42.6142C193.371 42.5468 194.137 42.7484 194.772 43.184C195.142 43.5035 195.371 43.9564 195.407 44.4436C195.444 44.9308 195.285 45.4125 194.966 45.7834C194.722 46.0807 194.399 46.3032 194.033 46.4255V46.4567C194.313 46.592 194.555 46.7939 194.738 47.0447C194.921 47.2954 195.039 47.5871 195.083 47.8942C195.248 48.4955 195.339 48.9152 195.412 49.1313C195.479 49.4292 195.578 49.7191 195.708 49.9957L194.361 49.9958ZM194.203 44.7093C194.203 43.8793 193.703 43.4722 192.726 43.4659C192.447 43.4576 192.168 43.4838 191.895 43.5442V45.9996H192.704C193.098 46.0182 193.485 45.8898 193.79 45.6395C193.926 45.5267 194.034 45.384 194.106 45.2227C194.177 45.0613 194.211 44.8856 194.203 44.7093H194.203ZM226.588 38.643H225.457V35.7304C225.457 34.7532 225.131 34.2804 224.461 34.2804C224.316 34.2755 224.172 34.3053 224.041 34.3674C223.911 34.4296 223.797 34.5221 223.71 34.6373C223.517 34.8699 223.413 35.1627 223.416 35.4643V38.643H222.294V35.5645C222.307 35.2335 222.218 34.9066 222.038 34.628C221.959 34.5141 221.852 34.4224 221.727 34.3615C221.602 34.3007 221.464 34.2727 221.325 34.2804C221.175 34.2771 221.026 34.3101 220.891 34.3766C220.757 34.4432 220.64 34.5413 220.552 34.6625C220.364 34.9139 220.27 35.2231 220.287 35.5363V38.643H219.179V34.9287C219.179 34.4714 219.171 33.9704 219.143 33.438H220.136L220.194 34.2084H220.23C220.366 33.9282 220.582 33.6947 220.852 33.5379C221.121 33.3811 221.432 33.3081 221.743 33.3283C222.058 33.3069 222.372 33.391 222.634 33.5675C222.896 33.744 223.092 34.0026 223.19 34.3024H223.204C223.359 34.0404 223.569 33.8141 223.818 33.6384C224.136 33.4323 224.508 33.3244 224.888 33.3283C225.101 33.3232 225.313 33.3633 225.51 33.446C225.706 33.5286 225.883 33.6518 226.028 33.8076C226.436 34.2938 226.637 34.92 226.588 35.552V38.643L226.588 38.643ZM217.997 38.6212H216.963L216.879 37.735H216.863C216.694 38.0203 216.449 38.2538 216.155 38.41C215.861 38.5663 215.53 38.6393 215.198 38.6212C214.678 38.6212 213.327 38.5219 213.373 36.4254V33.4379H214.587V36.2244C214.587 37.202 214.934 37.677 215.621 37.677C215.775 37.6915 215.931 37.6718 216.077 37.6192C216.223 37.5665 216.356 37.4823 216.465 37.3725C216.575 37.2628 216.659 37.1302 216.711 36.9844C216.763 36.8385 216.781 36.683 216.766 36.529V33.4379H217.929V37.0528C217.929 37.5217 217.997 38.6211 217.997 38.6211L217.997 38.6212ZM212.28 31.8595C212.282 31.9513 212.266 32.0425 212.23 32.1273C212.195 32.2121 212.142 32.2885 212.075 32.3513C211.931 32.4877 211.74 32.562 211.541 32.558C211.451 32.5566 211.361 32.5374 211.278 32.5015C211.195 32.4657 211.12 32.4138 211.057 32.3489C210.994 32.2841 210.944 32.2075 210.911 32.1235C210.877 32.0395 210.861 31.9498 210.863 31.8595C210.861 31.7673 210.878 31.6758 210.912 31.5903C210.947 31.5047 210.998 31.427 211.064 31.3616C211.201 31.2354 211.382 31.167 211.569 31.1705C211.756 31.1684 211.937 31.2366 212.075 31.3616C212.206 31.4946 212.279 31.6733 212.28 31.8595H212.28ZM212.144 38.643H210.982V33.438H212.144V38.643ZM209.548 38.643H208.41V35.7304C208.41 34.7532 208.085 34.2804 207.48 34.2804C207.347 34.2848 207.216 34.3192 207.097 34.381C206.978 34.4428 206.875 34.5304 206.795 34.6373C206.612 34.874 206.513 35.1651 206.514 35.4643V38.643H205.393V35.5645C205.406 35.2335 205.316 34.9065 205.136 34.628C205.059 34.5129 204.952 34.4202 204.827 34.3591C204.702 34.2981 204.564 34.271 204.425 34.2804C204.274 34.276 204.125 34.3086 203.99 34.3752C203.855 34.4418 203.738 34.5405 203.65 34.6625C203.446 34.9078 203.334 35.2173 203.336 35.5363V38.643H202.214V34.9287C202.214 34.4714 202.191 33.9704 202.18 33.438H203.156L203.225 34.2084H203.253C203.411 33.9305 203.642 33.7013 203.922 33.546C204.202 33.3907 204.52 33.3154 204.84 33.3283C205.155 33.3073 205.468 33.3918 205.729 33.5682C205.991 33.7447 206.186 34.003 206.283 34.3024H206.296C206.451 34.0364 206.665 33.8093 206.921 33.6384C207.187 33.4395 207.509 33.3308 207.842 33.3283C208.057 33.3229 208.27 33.3628 208.469 33.4454C208.667 33.528 208.846 33.6514 208.993 33.8076C209.399 34.2949 209.598 34.9207 209.548 35.552V38.643L209.548 38.643ZM200.873 34.1266C200.677 33.8602 200.417 33.6464 200.118 33.5044C199.819 33.3624 199.489 33.2966 199.157 33.3128C198.81 33.3001 198.465 33.3672 198.148 33.5089C197.831 33.6505 197.551 33.863 197.329 34.1297C196.887 34.67 196.657 35.3516 196.682 36.0481C196.654 36.3952 196.703 36.744 196.824 37.0704C196.946 37.3968 197.137 37.6928 197.386 37.9378C197.634 38.1828 197.932 38.3708 198.261 38.4889C198.59 38.6069 198.94 38.652 199.288 38.6212C199.884 38.6346 200.476 38.5307 201.032 38.3152L200.862 37.5229C200.408 37.6868 199.928 37.7666 199.445 37.7585C199.035 37.7783 198.631 37.6526 198.305 37.4035C198.137 37.2627 198.003 37.0858 197.913 36.886C197.824 36.6862 197.781 36.4688 197.788 36.2501H201.286C201.322 36.0812 201.338 35.9086 201.333 35.7359C201.347 35.1653 201.187 34.604 200.873 34.1266V34.1266ZM197.788 35.4893C197.814 35.1631 197.933 34.8512 198.132 34.5904C198.236 34.4413 198.376 34.3198 198.538 34.2363C198.7 34.1529 198.881 34.11 199.063 34.1113C199.248 34.1033 199.431 34.1444 199.595 34.2302C199.758 34.3161 199.896 34.4437 199.993 34.5999C200.157 34.867 200.237 35.1767 200.223 35.4893L197.788 35.4893ZM196.206 34.4559C196.109 34.4326 196.01 34.4221 195.91 34.4245C195.723 34.4191 195.536 34.4583 195.366 34.539C195.197 34.6196 195.049 34.7392 194.935 34.8881C194.729 35.189 194.624 35.548 194.638 35.9122V38.643H193.471V35.0696C193.471 34.4776 193.457 33.9295 193.432 33.4379H194.446L194.487 34.4276H194.53C194.632 34.0988 194.84 33.8127 195.122 33.6133C195.369 33.4307 195.667 33.3309 195.975 33.3282C196.053 33.3287 196.13 33.3381 196.206 33.3565V34.4558V34.4559ZM192.671 33.5163C192.688 33.8081 192.644 34.1002 192.543 34.3744C192.442 34.6487 192.285 34.8992 192.082 35.1104C191.788 35.3883 191.44 35.6019 191.058 35.7373C190.677 35.8726 190.271 35.9269 189.867 35.8965C189.648 35.8979 189.428 35.8843 189.21 35.8557V38.6431H188.164V31.5181C188.744 31.3931 189.337 31.3395 189.93 31.3584C190.668 31.3024 191.403 31.5112 192 31.9472C192.224 32.1412 192.4 32.3831 192.517 32.6549C192.633 32.9266 192.686 33.2211 192.671 33.5162L192.671 33.5163ZM191.529 33.5882C191.539 33.403 191.508 33.218 191.436 33.0467C191.365 32.8755 191.256 32.7223 191.118 32.5987C190.793 32.3503 190.389 32.2299 189.981 32.2603C189.723 32.2527 189.464 32.2738 189.21 32.3231V34.9287C189.429 34.9756 189.653 34.9966 189.876 34.9913C190.311 35.0161 190.739 34.8838 191.083 34.6186C191.23 34.4914 191.347 34.3327 191.424 34.1543C191.502 33.9759 191.537 33.7823 191.529 33.5882"
            fill="white"
          ></path>
          <path
            _ngcontent-dpw-c137=""
            d="M210.863 3.99615C211.81 2.88819 212.279 1.45162 212.168 0C211.46 0.0585695 210.77 0.257746 210.14 0.585813C209.51 0.91388 208.953 1.36421 208.5 1.91031C208.043 2.43216 207.699 3.0427 207.49 3.70351C207.281 4.36432 207.211 5.06109 207.286 5.74998C207.976 5.74832 208.658 5.58947 209.278 5.28553C209.898 4.98159 210.44 4.54059 210.863 3.99613"
            fill="white"
          ></path>
          <path
            _ngcontent-dpw-c137=""
            d="M217.358 18.0863C216.967 19.3465 216.401 20.5457 215.675 21.6487C214.607 23.1943 213.485 24.6731 211.825 24.7171C210.119 24.7328 209.574 23.7579 207.667 23.7579C205.89 23.7579 205.288 24.6731 203.713 24.7328C202.076 24.8016 200.843 23.141 199.763 21.5892C197.63 18.4794 196.003 12.9141 198.18 9.23117C198.698 8.3087 199.449 7.53684 200.357 6.99176C201.266 6.44668 202.302 6.1472 203.362 6.12287C204.979 6.07125 206.493 7.18915 207.442 7.18915C208.35 7.18915 210.169 5.84415 212.15 6.04301C213.05 6.07691 213.929 6.31841 214.72 6.74854C215.51 7.17866 216.189 7.78567 216.704 8.52182C215.899 8.99741 215.228 9.6681 214.752 10.4716C214.277 11.2751 214.013 12.1853 213.985 13.1177C213.984 14.1871 214.305 15.2322 214.906 16.1179C215.508 17.0036 216.362 17.6892 217.358 18.0862"
            fill="white"
          ></path>
          <path
            _ngcontent-dpw-c137=""
            d="M173.164 0H171.164V50H173.164V0Z"
            fill="white"
          ></path>
        </svg>
      );

    default:
      return null;
  }
};

export { GlobalSvg };