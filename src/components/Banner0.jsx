import React from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={["bottom", "top"]}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            <svg
              width="477"
              height="454"
              viewBox="0 0 477 454"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M346.139 18.2346C341.122 14.0546 338.518 6.97995 334.111 -4.74872e-05C333.766 17.5 324.783 27.4173 308.53 31.6799C324.926 32.8199 335.737 40.2053 340.539 56.6306C341.723 39.8786 350.921 30.8386 365.725 26.7533C358.713 23.8733 351.237 22.4826 346.139 18.2346Z"
                fill="#A3DFE5"
              />
              <path
                d="M221.889 68.7067C211.347 67.5053 205.401 61.4747 202.044 51.7973C201.015 62.3973 195.688 68.88 185.967 72.7213C196.544 73.5293 201.935 80.1173 205.912 88.9133C207.089 78.4733 212.996 72.7187 221.889 68.7067Z"
                fill="#A3DFE5"
              />
              <path
                d="M265.74 35.8852C261.166 32.2132 255.64 27.7705 251.301 24.2878C247.269 28.9798 242.62 34.3892 239.145 38.4238C243.762 42.0678 249.213 46.3665 253.556 49.7878C257.493 45.2945 262.064 40.0798 265.74 35.8852Z"
                fill="#A3DFE5"
              />
              <path
                d="M34.9227 359.912C34.8333 361.902 34.6787 363.961 34.4573 366.086C34.236 368.21 33.9493 370.202 33.5947 372.061H30.872L27.8187 364.226H15.4027V380.494H23.5027L26.424 375.381H28.5493C28.7693 377.55 28.8813 379.962 28.8813 382.617C28.8813 385.273 28.7693 387.753 28.5493 390.053H26.424L23.5027 384.809H15.4027V402.072H28.3493L31.868 393.64H34.5907C34.7667 394.481 34.944 395.433 35.1213 396.494C35.2987 397.556 35.4427 398.653 35.5533 399.78C35.664 400.909 35.7533 402.05 35.8187 403.2C35.8853 404.352 35.9187 405.414 35.9187 406.386H0V403.864C0.752 403.465 1.592 403.09 2.52267 402.736C3.452 402.382 4.424 402.116 5.444 401.94V364.36C4.55733 364.182 3.61733 363.928 2.62133 363.597C1.62533 363.265 0.752 362.877 0 362.434V359.912H34.9227Z"
                fill="#4D4D4D"
              />
              <path
                d="M233.5 86.609C223.747 86.4796 215.8 94.1663 215.632 103.898C215.46 113.72 223.043 121.653 232.796 121.852C242.756 122.053 250.903 114.23 251.001 104.366C251.099 94.7596 243.193 86.737 233.5 86.609ZM311.304 324.306C318.976 329.988 327.955 331.218 336.893 332.713C339.673 333.178 341.019 332.17 342.228 329.886C349.305 316.513 348.789 303.15 342.277 289.805C341.759 288.742 340.481 287.476 339.427 287.342C333.297 286.562 327.135 285.738 320.976 285.689C318.329 285.668 315.671 287.481 312.603 288.614C325.159 301.848 324.548 313.081 311.304 324.306V324.306ZM233.048 263.77C267.895 263.77 302.744 263.772 337.591 263.765C339.861 263.765 342.153 263.892 344.395 263.613C348.667 263.09 351.661 259.789 351.857 255.728C352.06 251.534 349.117 247.82 344.805 246.962C343.633 246.728 342.401 246.728 341.196 246.726C271.504 246.705 201.808 246.689 132.116 246.68C129.085 246.68 126.045 246.584 123.028 246.788C118.047 247.124 114.752 250.617 114.759 255.29C114.764 260.009 118.065 263.393 123.052 263.736C124.259 263.818 125.475 263.765 126.687 263.765C162.14 263.765 197.595 263.765 233.048 263.77V263.77ZM254.923 297.496C254.928 297.97 254.932 298.444 254.936 298.918C243.359 298.918 231.781 298.942 220.204 298.893C218.704 298.886 217.18 298.633 215.711 298.3C210.252 297.06 205.827 294.582 204.221 288.658C203.989 287.801 203.144 286.888 202.34 286.442C195.751 282.796 189.139 279.186 182.461 275.705C177.672 273.205 172.427 271.061 167.327 273.757C164.788 275.098 162.471 278.33 161.695 281.156C160.765 284.544 163.02 287.94 166.427 289.084C181.285 294.068 193.865 303.16 207.02 311.189C221.079 319.772 235.504 325.762 252.649 325.05C270.656 324.302 288.697 324.758 306.436 320.886C313.996 319.236 317.44 314.824 317.535 307.092C317.621 300.212 314.599 294.592 309.479 290.486C303.123 285.389 296.615 280.213 289.443 276.465C279.347 271.188 268.459 270.717 257.904 275.796C248.623 280.261 239.263 281.338 229.24 278.501C224.96 277.289 220.291 277.016 215.805 277.066C210.391 277.126 207.361 280.101 206.747 284.813C206.12 289.61 208.524 293.878 213.684 295.045C218.317 296.09 223.235 296.19 228.025 296.202C237.023 296.221 246.093 294.464 254.923 297.496V297.496ZM335.533 237.753C336.816 205.97 320.237 161.424 278.712 139.481C243.195 120.713 201.141 125.117 169.949 151.602C143.499 174.057 131.336 203.296 130.555 237.773H148.972C147.985 210.777 155.376 186.666 173.012 166.242C190.779 145.664 213.416 134.853 240.645 133.736C218.296 140.674 200.285 153.513 187.203 172.966C174.065 192.5 168.708 214.066 170.484 237.753H335.533Z"
                fill="#FBB03B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M278.712 139.258C276.147 137.902 273.544 136.794 270.916 135.679L275.204 126.828C278.214 127.79 280.883 127.808 281.176 124.923L280.799 123.876C280.799 123.876 280.52 123.104 278.891 121.95C281.515 122.612 283.69 122.339 283.952 119.75L283.575 118.695C283.575 118.695 283.239 117.738 281.094 116.375L282.042 114.192L289.843 115.622C317.935 120.271 317.454 95.6936 317.454 95.6936C317.49 82.0069 321.534 78.6029 321.534 78.6029C320.443 81.4456 325.063 86.7442 325.063 86.7442C324.515 78.3136 330.75 66.4869 330.75 66.4869C314.258 74.1122 312.966 91.7509 312.966 91.7522C312.656 95.9496 312.132 101.208 308.914 104.316C305.132 107.975 298.599 108.523 293.735 107.346C293.274 107.232 286.498 104.866 286.811 104.155C286.854 104.052 306.052 60.1362 306.052 60.1362C306.019 62.6029 311.836 66.1402 311.836 66.1402C309.895 63.0456 309.619 43.3722 309.619 43.3722C305.047 49.8389 289.963 57.8736 289.963 57.8736L297.902 57.9242L278.23 100.335C271.31 97.5669 264.228 91.7149 265.29 83.5616C266.235 76.3176 271.992 71.6309 275.687 65.8309C282.571 55.0376 277.262 42.6976 277.262 42.6976C274.307 54.4776 267.386 59.2562 267.386 59.2562C269.006 61.8336 275.57 59.0042 275.57 59.0042C274.826 62.6349 267.415 68.0069 267.415 68.0069C262.387 72.8256 257.066 77.8189 256.89 85.2562C256.732 91.9896 260.366 98.4162 264.764 103.299C265.216 103.802 273.814 111.355 274.058 110.867C274.055 110.87 273.266 112.456 273.006 112.986C272.019 112.69 270.974 112.394 269.802 112.102C269.802 112.102 265.839 113.584 268.919 117.115C268.919 117.115 269.767 117.678 271.059 118.431C269.862 118.054 268.526 117.675 267.022 117.299C267.022 117.299 263.063 118.779 266.14 122.31C266.14 122.31 266.796 122.744 267.831 123.364L263.239 132.902C231.471 122.424 196.714 128.644 169.95 151.37C143.499 173.826 131.336 202.64 130.555 237.307H148.972C147.986 210.64 155.376 186.434 173.012 166.01C190.779 145.43 213.416 134.738 240.646 133.619C218.295 140.558 200.286 153.232 187.203 172.686C174.066 192.219 168.708 213.307 170.484 237.307H335.534C336.816 206.64 320.238 161.2 278.712 139.258Z"
                fill="#FBB03B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M254.923 297.495C246.094 294.464 237.022 296.222 228.025 296.202C223.234 296.19 218.318 296.09 213.683 295.044C208.523 293.878 206.119 289.611 206.746 284.812C207.362 280.1 210.391 277.127 215.805 277.067C220.29 277.016 224.959 277.29 229.239 278.502C239.263 281.339 248.622 280.26 257.903 275.796C268.458 270.716 279.346 271.188 289.443 276.466C296.615 280.212 303.122 285.39 309.479 290.486C314.599 294.591 317.621 300.211 317.535 307.091C317.441 314.823 313.997 319.236 306.437 320.887C288.698 324.758 270.657 324.302 252.65 325.05C235.505 325.762 221.078 319.771 207.019 311.19C193.866 303.159 181.285 294.068 166.427 289.083C163.019 287.939 160.766 284.543 161.694 281.155C162.47 278.33 164.787 275.098 167.327 273.756C172.427 271.062 177.673 273.204 182.461 275.704C189.138 279.187 195.75 282.796 202.339 286.443C203.145 286.888 203.99 287.8 204.222 288.658C205.827 294.582 210.253 297.06 215.711 298.3C217.179 298.634 218.705 298.886 220.205 298.894C231.782 298.942 243.358 298.918 254.937 298.918C254.933 298.444 254.929 297.97 254.923 297.495Z"
                fill="#A3DFE5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M233.048 263.767C197.595 263.765 162.14 263.765 126.687 263.765C125.475 263.765 124.259 263.818 123.052 263.737C118.066 263.394 114.764 260.01 114.759 255.291C114.752 250.618 118.047 247.125 123.027 246.789C126.046 246.583 129.086 246.681 132.116 246.681C201.808 246.689 271.504 246.705 341.196 246.727C342.402 246.729 343.632 246.729 344.804 246.962C349.118 247.819 352.06 251.534 351.856 255.729C351.662 259.79 348.667 263.09 344.395 263.614C342.154 263.893 339.86 263.765 337.591 263.765C302.743 263.771 267.895 263.77 233.048 263.767Z"
                fill="#FBB03B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M328.3 322.947C326.573 324.415 325.553 325.283 324.533 326.148C326.257 327.262 327.869 328.746 329.756 329.318C330.606 329.578 332.008 328.02 333.161 327.286C331.657 325.943 330.153 324.602 328.3 322.947ZM311.304 324.307C324.549 313.082 325.16 301.848 312.604 288.615C315.67 287.48 318.329 285.668 320.977 285.69C327.134 285.739 333.297 286.563 339.428 287.343C340.482 287.475 341.76 288.743 342.277 289.806C348.789 303.15 349.305 316.514 342.228 329.886C341.018 332.171 339.673 333.179 336.893 332.712C327.954 331.218 318.977 329.987 311.304 324.307Z"
                fill="#A3DFE5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M233.5 86.6092C243.193 86.7372 251.099 94.7599 251.001 104.367C250.903 114.231 242.756 122.053 232.796 121.852C223.043 121.653 215.46 113.72 215.632 103.899C215.8 94.1666 223.747 86.4799 233.5 86.6092Z"
                fill="#FBB03B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M328.3 322.947C330.153 324.601 331.657 325.943 333.161 327.285C332.008 328.02 330.606 329.577 329.756 329.317C327.869 328.745 326.257 327.261 324.533 326.148C325.553 325.283 326.573 324.415 328.3 322.947Z"
                fill="#FBB03B"
              />
              <path
                d="M42.1591 359.912H63.9364V362.434C63.0071 362.922 61.9777 363.33 60.8484 363.662C59.7204 363.994 58.6244 364.226 57.5617 364.36V402.072H70.3764L74.8244 390.186H77.5471C77.7231 391.206 77.8897 392.4 78.0457 393.773C78.1991 395.145 78.3204 396.584 78.4097 398.088C78.4977 399.593 78.5644 401.076 78.6084 402.537C78.6524 403.996 78.6524 405.281 78.6084 406.386H42.1591V403.864C43.1764 403.332 44.1391 402.913 45.0471 402.604C45.9537 402.293 46.8057 402.072 47.6031 401.94V364.36C45.4337 364.005 43.6191 363.364 42.1591 362.434V359.912Z"
                fill="#4D4D4D"
              />
              <path
                d="M122.959 402.47C125.747 402.47 127.939 401.64 129.533 399.98C131.126 398.321 131.922 396.118 131.922 393.374C131.922 391.692 131.657 390.309 131.126 389.224C130.595 388.14 129.865 387.276 128.934 386.634C128.006 385.994 126.898 385.552 125.615 385.306C124.331 385.064 122.937 384.942 121.431 384.942H117.913V402.005C118.533 402.138 119.185 402.249 119.873 402.337C120.558 402.426 121.587 402.47 122.959 402.47ZM120.038 380.626C120.79 380.626 121.542 380.593 122.295 380.526C123.047 380.46 123.757 380.384 124.421 380.294C126.146 379.586 127.541 378.492 128.602 377.008C129.665 375.525 130.197 373.832 130.197 371.929C130.197 369.14 129.466 367.093 128.006 365.786C126.545 364.482 124.662 363.829 122.362 363.829C121.387 363.829 120.546 363.85 119.839 363.894C119.13 363.94 118.487 364.005 117.913 364.094V380.626H120.038ZM102.909 406.388V403.864C103.749 403.378 104.645 402.957 105.598 402.604C106.549 402.249 107.466 402.028 108.353 401.94V364.36C107.466 364.182 106.538 363.928 105.565 363.597C104.59 363.265 103.705 362.877 102.909 362.434V359.912H113.598C115.279 359.912 116.873 359.845 118.378 359.713C119.882 359.58 121.609 359.513 123.557 359.513C125.682 359.513 127.739 359.668 129.731 359.978C131.723 360.288 133.493 360.84 135.043 361.637C136.593 362.434 137.831 363.553 138.762 364.99C139.69 366.429 140.155 368.276 140.155 370.534C140.155 371.95 139.901 373.268 139.391 374.485C138.882 375.702 138.174 376.776 137.267 377.705C136.359 378.634 135.297 379.409 134.081 380.029C132.862 380.649 131.546 381.092 130.13 381.357V381.621C131.546 381.8 132.974 382.132 134.413 382.617C135.85 383.106 137.145 383.813 138.297 384.742C139.447 385.672 140.387 386.833 141.118 388.228C141.849 389.622 142.214 391.273 142.214 393.174C142.214 395.565 141.682 397.622 140.621 399.349C139.558 401.076 138.13 402.493 136.338 403.598C134.545 404.706 132.497 405.513 130.197 406.022C127.894 406.53 125.505 406.785 123.026 406.785C122.097 406.785 121.077 406.762 119.971 406.72C118.865 406.674 117.758 406.629 116.653 406.586C115.545 406.542 114.471 406.497 113.431 406.453C112.391 406.409 111.517 406.388 110.809 406.388H102.909Z"
                fill="#4D4D4D"
              />
              <path
                d="M162.861 387.067H174.613L170.297 374.384L169.036 368.675H168.904L167.443 374.517L162.861 387.067ZM163.127 406.387H146.728V403.864C147.436 403.423 148.199 403.035 149.019 402.703C149.837 402.371 150.645 402.116 151.443 401.939L168.572 359.115H173.484L190.149 401.939C191.035 402.116 191.919 402.371 192.805 402.703C193.691 403.035 194.465 403.423 195.129 403.864V406.387H174.348V403.864C175.188 403.465 176.096 403.091 177.069 402.736C178.043 402.381 178.972 402.116 179.859 401.939L176.008 391.381H161.268L157.351 401.939C159.387 402.205 161.312 402.847 163.127 403.864V406.387Z"
                fill="#4D4D4D"
              />
              <path
                d="M229.72 359.912H246.185V362.5C245.344 363.164 244.414 363.749 243.397 364.258C242.378 364.766 241.426 365.153 240.542 365.418V407.184H234.898L211.461 373.324L208.805 368.21H208.606L209.204 373.522V401.209C210.089 401.43 211.073 401.796 212.158 402.304C213.242 402.813 214.161 403.332 214.914 403.864V406.386H198.514V403.864C199.31 403.333 200.185 402.837 201.137 402.373C202.088 401.909 203.073 401.521 204.092 401.213V365.02C203.205 364.666 202.321 364.269 201.436 363.826C200.55 363.384 199.753 362.921 199.045 362.434V359.912H213.386L232.442 387.532L235.496 393.241H235.761L235.429 387.544V365.416C234.368 365.062 233.338 364.632 232.342 364.124C231.346 363.616 230.472 363.076 229.72 362.5V359.912Z"
                fill="#4D4D4D"
              />
              <path
                d="M263.447 383.149C263.447 385.982 263.668 388.605 264.111 391.017C264.553 393.43 265.251 395.51 266.201 397.258C267.153 399.007 268.371 400.378 269.853 401.374C271.336 402.37 273.117 402.867 275.199 402.867C277.101 402.867 278.717 402.37 280.045 401.374C281.373 400.378 282.457 399.007 283.299 397.258C284.139 395.51 284.748 393.43 285.124 391.017C285.5 388.605 285.689 385.982 285.689 383.149C285.689 380.317 285.477 377.694 285.057 375.282C284.637 372.869 283.973 370.789 283.067 369.041C282.159 367.291 280.964 365.919 279.481 364.923C277.997 363.927 276.195 363.43 274.069 363.43C272.033 363.43 270.329 363.927 268.957 364.923C267.585 365.919 266.489 367.291 265.671 369.041C264.852 370.789 264.277 372.869 263.945 375.282C263.613 377.694 263.447 380.317 263.447 383.149ZM300.96 413.823C300.163 414.663 299.309 415.471 298.403 416.246C297.496 417.019 296.544 417.718 295.548 418.338C294.552 418.957 293.501 419.445 292.395 419.798C291.288 420.153 290.137 420.33 288.943 420.33C286.905 420.33 284.859 419.965 282.801 419.234C280.743 418.505 278.595 417.663 276.36 416.711C274.125 415.759 271.78 414.842 269.323 413.955C266.865 413.07 264.199 412.451 261.323 412.097L262.981 409.177C265.107 408.778 267.197 408.677 269.256 408.877C271.315 409.075 273.349 409.407 275.364 409.873C277.379 410.338 279.392 410.857 281.407 411.433C283.42 412.009 285.445 412.473 287.481 412.827C289.517 413.181 291.597 413.346 293.723 413.326C295.847 413.302 298.037 412.915 300.296 412.163L300.96 413.823ZM252.16 383.149C252.16 379.697 252.647 376.499 253.62 373.555C254.593 370.613 256.032 368.066 257.936 365.919C259.839 363.774 262.185 362.102 264.975 360.906C267.763 359.713 270.971 359.115 274.601 359.115C278.229 359.115 281.44 359.713 284.228 360.906C287.016 362.102 289.351 363.774 291.232 365.919C293.113 368.066 294.541 370.613 295.515 373.555C296.488 376.499 296.976 379.697 296.976 383.149C296.976 386.602 296.488 389.799 295.515 392.742C294.541 395.687 293.113 398.233 291.232 400.378C289.351 402.526 287.016 404.195 284.228 405.391C281.44 406.586 278.229 407.183 274.601 407.183C270.971 407.183 267.763 406.586 264.975 405.391C262.185 404.195 259.839 402.526 257.936 400.378C256.032 398.233 254.593 395.687 253.62 392.742C252.647 389.799 252.16 386.602 252.16 383.149Z"
                fill="#4D4D4D"
              />
              <path
                d="M302.155 359.912H322.604V362.434C321.144 363.364 319.46 364.005 317.559 364.36V389.921C317.559 392.09 317.8 393.905 318.288 395.366C318.775 396.826 319.484 398.01 320.414 398.918C321.343 399.826 322.46 400.478 323.766 400.877C325.071 401.274 326.543 401.474 328.182 401.474C329.642 401.474 330.98 401.265 332.198 400.842C333.415 400.424 334.478 399.748 335.386 398.818C336.292 397.888 336.988 396.672 337.476 395.166C337.963 393.661 338.207 391.804 338.207 389.589V364.692C337.188 364.47 336.138 364.161 335.054 363.762C333.968 363.364 333.071 362.922 332.364 362.434V359.912H348.83V362.434C348.034 363.009 347.147 363.474 346.175 363.829C345.2 364.182 344.248 364.47 343.319 364.692V389.656C343.319 395.322 341.826 399.626 338.838 402.569C335.85 405.513 331.634 406.985 326.19 406.985C320.258 406.985 315.676 405.657 312.446 403C309.214 400.345 307.599 396.096 307.599 390.253V364.36C306.714 364.226 305.784 363.994 304.811 363.662C303.836 363.33 302.952 362.922 302.155 362.434V359.912Z"
                fill="#4D4D4D"
              />
              <path
                d="M387.47 359.912C387.382 361.902 387.228 363.961 387.006 366.086C386.782 368.21 386.497 370.202 386.142 372.061H383.421L380.366 364.226H367.95V380.494H376.052L378.973 375.381H381.098C381.32 377.55 381.429 379.962 381.429 382.617C381.429 385.273 381.32 387.753 381.098 390.053H378.973L376.052 384.809H367.95V402.072H380.897L384.416 393.64H387.14C387.314 394.481 387.494 395.433 387.67 396.494C387.845 397.556 387.992 398.653 388.101 399.78C388.213 400.909 388.301 402.05 388.366 403.2C388.434 404.352 388.468 405.414 388.468 406.386H352.548V403.864C353.3 403.465 354.141 403.09 355.07 402.736C356 402.382 356.973 402.116 357.992 401.94V364.36C357.106 364.182 356.166 363.928 355.17 363.597C354.174 363.265 353.3 362.877 352.548 362.434V359.912H387.47Z"
                fill="#4D4D4D"
              />
              <path
                d="M426.908 406.387H404.069V403.863C404.953 403.511 405.961 403.144 407.09 402.768C408.217 402.394 409.357 402.116 410.509 401.939V364.227H402.808L398.557 375.58H395.836C395.658 374.695 395.481 373.567 395.305 372.194C395.126 370.823 394.973 369.406 394.84 367.944C394.708 366.484 394.597 365.035 394.508 363.596C394.418 362.158 394.376 360.93 394.376 359.912H436.602C436.602 360.972 436.557 362.212 436.469 363.63C436.38 365.046 436.269 366.484 436.137 367.944C436.004 369.406 435.849 370.811 435.672 372.16C435.494 373.512 435.318 374.65 435.141 375.58H432.42L428.169 364.227H420.468V401.939C421.618 402.16 422.758 402.426 423.886 402.736C425.016 403.046 426.022 403.422 426.908 403.863V406.387Z"
                fill="#4D4D4D"
              />
              <path
                d="M475.906 359.912C475.817 361.902 475.662 363.961 475.441 366.086C475.218 368.21 474.933 370.202 474.578 372.061H471.856L468.802 364.226H456.386V380.494H464.488L467.408 375.381H469.533C469.754 377.55 469.865 379.962 469.865 382.617C469.865 385.273 469.754 387.753 469.533 390.053H467.408L464.488 384.809H456.386V402.072H469.333L472.852 393.64H475.574C475.75 394.481 475.929 395.433 476.105 396.494C476.281 397.556 476.426 398.653 476.537 399.78C476.648 400.909 476.736 402.05 476.802 403.2C476.869 404.352 476.902 405.414 476.902 406.386H440.984V403.864C441.734 403.465 442.577 403.09 443.505 402.736C444.434 402.382 445.409 402.116 446.428 401.94V364.36C445.542 364.182 444.601 363.928 443.605 363.597C442.609 363.265 441.734 362.877 440.984 362.434V359.912H475.906Z"
                fill="#4D4D4D"
              />
              <path
                d="M106.802 427.421C106.131 427.421 105.487 427.429 104.868 427.441C104.25 427.453 103.76 427.499 103.399 427.575V451.007C103.527 451.034 103.76 451.054 104.095 451.066C104.43 451.079 104.791 451.091 105.178 451.105C105.564 451.117 105.932 451.123 106.279 451.123H107.034C108.812 451.123 110.32 450.789 111.558 450.118C112.795 449.449 113.807 448.553 114.594 447.431C115.379 446.31 115.952 445.014 116.314 443.546C116.675 442.075 116.855 440.529 116.855 438.905C116.855 437.642 116.682 436.334 116.332 434.981C115.986 433.627 115.418 432.39 114.632 431.269C113.846 430.147 112.808 429.226 111.519 428.503C110.23 427.782 108.658 427.421 106.802 427.421ZM96.7482 452.786V451.666C97.6509 451.253 98.7069 450.945 99.9189 450.737V427.807C99.3256 427.679 98.7589 427.531 98.2176 427.363C97.6762 427.195 97.1869 427.022 96.7482 426.841V425.721H100.692C101.131 425.721 101.646 425.707 102.239 425.681C102.831 425.657 103.443 425.623 104.076 425.585C104.707 425.546 105.314 425.506 105.894 425.469C106.472 425.43 106.956 425.41 107.343 425.41C111.726 425.41 115.096 426.583 117.455 428.93C119.814 431.275 120.992 434.601 120.992 438.905C120.992 440.942 120.703 442.83 120.123 444.57C119.543 446.31 118.659 447.811 117.474 449.074C116.288 450.337 114.787 451.331 112.968 452.053C111.152 452.774 109.006 453.134 106.531 453.134C106.144 453.134 105.706 453.115 105.216 453.077C104.727 453.038 104.211 452.999 103.67 452.961C103.128 452.922 102.58 452.883 102.026 452.845C101.471 452.806 100.95 452.786 100.46 452.786H96.7482Z"
                fill="#4D4D4D"
              />
              <path
                d="M143.651 425.72C143.624 426.751 143.58 427.79 143.515 428.832C143.451 429.876 143.355 430.927 143.225 431.984H142.22L140.635 427.731H132.205V437.976H138.508L140.016 435.116H140.983C141.137 437.668 141.137 440.272 140.983 442.927H140.016L138.508 439.988H132.205V450.776H141.099L142.993 446.136H143.96C144.14 447.219 144.269 448.314 144.347 449.422C144.424 450.531 144.437 451.652 144.385 452.787H125.323V451.666C126.225 451.252 127.281 450.944 128.493 450.738V427.807C127.977 427.706 127.449 427.571 126.908 427.403C126.367 427.235 125.839 427.048 125.323 426.842V425.72H143.651Z"
                fill="#4D4D4D"
              />
              <path
                d="M159.619 425.72H170.213V426.842C169.595 427.074 168.976 427.274 168.357 427.44C167.739 427.608 167.12 427.731 166.501 427.807V450.776H175.395L177.676 444.551H178.681C178.759 445.091 178.829 445.718 178.895 446.426C178.959 447.136 179.009 447.87 179.049 448.631C179.088 449.391 179.107 450.132 179.107 450.854C179.107 451.576 179.093 452.22 179.068 452.787H159.619V451.666C160.237 451.382 160.804 451.176 161.32 451.047C161.836 450.918 162.325 450.815 162.789 450.738V427.807C162.196 427.706 161.629 427.571 161.088 427.403C160.547 427.235 160.057 427.048 159.619 426.842V425.72Z"
                fill="#4D4D4D"
              />
              <path
                d="M187.111 439.253C187.111 440.904 187.285 442.457 187.634 443.913C187.981 445.369 188.503 446.638 189.199 447.722C189.895 448.804 190.771 449.662 191.829 450.293C192.886 450.925 194.135 451.24 195.579 451.24C196.894 451.24 198.041 450.925 199.021 450.293C200.001 449.662 200.806 448.804 201.437 447.722C202.069 446.638 202.545 445.369 202.867 443.913C203.19 442.457 203.351 440.904 203.351 439.253C203.351 437.605 203.183 436.052 202.849 434.594C202.513 433.138 201.998 431.868 201.302 430.785C200.606 429.702 199.729 428.846 198.673 428.214C197.615 427.582 196.365 427.268 194.922 427.268C193.503 427.268 192.299 427.582 191.306 428.214C190.314 428.846 189.509 429.702 188.89 430.785C188.271 431.868 187.819 433.138 187.537 434.594C187.253 436.052 187.111 437.605 187.111 439.253ZM182.974 439.253C182.974 437.242 183.25 435.381 183.806 433.666C184.359 431.952 185.158 430.47 186.202 429.22C187.247 427.969 188.529 426.997 190.05 426.3C191.57 425.605 193.298 425.256 195.231 425.256C197.165 425.256 198.891 425.605 200.413 426.3C201.933 426.997 203.215 427.969 204.259 429.22C205.305 430.47 206.102 431.952 206.657 433.666C207.211 435.381 207.489 437.242 207.489 439.253C207.489 441.265 207.211 443.126 206.657 444.84C206.102 446.556 205.305 448.037 204.259 449.288C203.215 450.538 201.933 451.51 200.413 452.208C198.891 452.902 197.165 453.25 195.231 453.25C193.298 453.25 191.57 452.902 190.05 452.208C188.529 451.51 187.247 450.538 186.202 449.288C185.158 448.037 184.359 446.556 183.806 444.84C183.25 443.126 182.974 441.265 182.974 439.253"
                fill="#4D4D4D"
              />
              <path
                d="M216.536 450.119C216.845 450.428 217.244 450.693 217.735 450.912C218.224 451.131 218.959 451.24 219.939 451.24C220.763 451.24 221.536 451.131 222.259 450.912C222.98 450.693 223.605 450.369 224.133 449.944C224.661 449.52 225.081 449.004 225.391 448.399C225.7 447.793 225.855 447.103 225.855 446.329C225.855 445.299 225.539 444.435 224.907 443.739C224.275 443.043 223.489 442.424 222.548 441.883C221.607 441.341 220.583 440.813 219.475 440.297C218.367 439.781 217.341 439.169 216.4 438.461C215.459 437.752 214.673 436.901 214.041 435.909C213.409 434.917 213.095 433.672 213.095 432.177C213.095 431.095 213.288 430.128 213.675 429.277C214.061 428.427 214.608 427.705 215.317 427.112C216.027 426.52 216.871 426.061 217.851 425.74C218.829 425.417 219.925 425.256 221.137 425.256C222.709 425.256 224.147 425.379 225.449 425.624C226.751 425.869 227.775 426.171 228.523 426.532C228.523 426.971 228.489 427.48 228.425 428.059C228.361 428.64 228.284 429.239 228.193 429.857C228.103 430.476 228.007 431.076 227.904 431.655C227.8 432.236 227.697 432.745 227.595 433.183H226.589L225.043 427.885C224.573 427.68 223.981 427.525 223.267 427.421C222.552 427.319 221.791 427.267 220.984 427.267C219.657 427.267 218.591 427.635 217.784 428.369C216.977 429.103 216.575 430.128 216.575 431.443C216.575 432.5 216.892 433.389 217.528 434.111C218.163 434.832 218.96 435.477 219.92 436.044C220.879 436.611 221.911 437.159 223.012 437.688C224.115 438.216 225.145 438.828 226.104 439.524C227.064 440.22 227.861 441.045 228.497 441.999C229.133 442.952 229.451 444.139 229.451 445.556C229.451 446.716 229.237 447.773 228.813 448.727C228.387 449.681 227.775 450.492 226.976 451.163C226.176 451.833 225.197 452.349 224.037 452.709C222.877 453.071 221.563 453.251 220.093 453.251C218.469 453.251 217.012 453.057 215.724 452.671C214.435 452.284 213.52 451.872 212.979 451.433C213.004 450.995 213.049 450.467 213.115 449.848C213.177 449.229 213.256 448.591 213.345 447.933C213.436 447.276 213.533 446.639 213.636 446.02C213.739 445.401 213.841 444.873 213.945 444.435H214.951L216.536 450.119Z"
                fill="#4D4D4D"
              />
              <path
                d="M254.429 427.421C253.758 427.421 253.114 427.429 252.495 427.441C251.877 427.453 251.387 427.499 251.026 427.575V451.007C251.154 451.034 251.387 451.054 251.722 451.066C252.057 451.079 252.418 451.091 252.805 451.105C253.191 451.117 253.559 451.123 253.906 451.123H254.661C256.439 451.123 257.947 450.789 259.185 450.118C260.422 449.449 261.434 448.553 262.221 447.431C263.006 446.31 263.579 445.014 263.941 443.546C264.302 442.075 264.482 440.529 264.482 438.905C264.482 437.642 264.309 436.334 263.959 434.981C263.613 433.627 263.045 432.39 262.259 431.269C261.473 430.147 260.435 429.226 259.146 428.503C257.857 427.782 256.285 427.421 254.429 427.421ZM244.375 452.786V451.666C245.278 451.253 246.334 450.945 247.546 450.737V427.807C246.953 427.679 246.386 427.531 245.845 427.363C245.303 427.195 244.814 427.022 244.375 426.841V425.721H248.319C248.758 425.721 249.273 425.707 249.866 425.681C250.458 425.657 251.07 425.623 251.703 425.585C252.334 425.546 252.941 425.506 253.521 425.469C254.099 425.43 254.583 425.41 254.97 425.41C259.353 425.41 262.723 426.583 265.082 428.93C267.441 431.275 268.619 434.601 268.619 438.905C268.619 440.942 268.33 442.83 267.75 444.57C267.17 446.31 266.286 447.811 265.101 449.074C263.915 450.337 262.414 451.331 260.595 452.053C258.779 452.774 256.633 453.134 254.158 453.134C253.771 453.134 253.333 453.115 252.843 453.077C252.354 453.038 251.838 452.999 251.297 452.961C250.755 452.922 250.207 452.883 249.653 452.845C249.098 452.806 248.577 452.786 248.087 452.786H244.375Z"
                fill="#4D4D4D"
              />
              <path
                d="M283.583 452.787H273.684V451.665C274.689 451.201 275.72 450.892 276.777 450.737V427.808C276.261 427.705 275.747 427.571 275.231 427.403C274.715 427.235 274.199 427.048 273.684 426.841V425.72H283.583V426.841C283.119 427.048 282.616 427.235 282.075 427.403C281.533 427.571 281.004 427.705 280.489 427.808V450.737C281.031 450.84 281.572 450.969 282.113 451.124C282.655 451.279 283.144 451.46 283.583 451.665V452.787Z"
                fill="#4D4D4D"
              />
              <path
                d="M292.824 439.253C292.824 440.904 292.997 442.457 293.346 443.913C293.693 445.369 294.216 446.638 294.912 447.722C295.608 448.804 296.484 449.662 297.541 450.293C298.598 450.925 299.848 451.24 301.292 451.24C302.606 451.24 303.753 450.925 304.733 450.293C305.713 449.662 306.518 448.804 307.149 447.722C307.781 446.638 308.257 445.369 308.58 443.913C308.902 442.457 309.064 440.904 309.064 439.253C309.064 437.605 308.896 436.052 308.561 434.594C308.225 433.138 307.71 431.868 307.014 430.785C306.318 429.702 305.441 428.846 304.385 428.214C303.328 427.582 302.077 427.268 300.634 427.268C299.216 427.268 298.012 427.582 297.018 428.214C296.026 428.846 295.221 429.702 294.602 430.785C293.984 431.868 293.532 433.138 293.249 434.594C292.965 436.052 292.824 437.605 292.824 439.253ZM288.686 439.253C288.686 437.242 288.962 435.381 289.518 433.666C290.072 431.952 290.87 430.47 291.914 429.22C292.96 427.969 294.241 426.997 295.762 426.3C297.282 425.605 299.01 425.256 300.944 425.256C302.877 425.256 304.604 425.605 306.125 426.3C307.645 426.997 308.928 427.969 309.972 429.22C311.017 430.47 311.814 431.952 312.369 433.666C312.924 435.381 313.201 437.242 313.201 439.253C313.201 441.265 312.924 443.126 312.369 444.84C311.814 446.556 311.017 448.037 309.972 449.288C308.928 450.538 307.645 451.51 306.125 452.208C304.604 452.902 302.877 453.25 300.944 453.25C299.01 453.25 297.282 452.902 295.762 452.208C294.241 451.51 292.96 450.538 291.914 449.288C290.87 448.037 290.072 446.556 289.518 444.84C288.962 443.126 288.686 441.265 288.686 439.253"
                fill="#4D4D4D"
              />
              <path
                d="M322.249 450.119C322.559 450.428 322.957 450.693 323.448 450.912C323.937 451.131 324.672 451.24 325.652 451.24C326.476 451.24 327.249 451.131 327.972 450.912C328.693 450.693 329.319 450.369 329.847 449.944C330.375 449.52 330.795 449.004 331.104 448.399C331.413 447.793 331.568 447.103 331.568 446.329C331.568 445.299 331.252 444.435 330.62 443.739C329.988 443.043 329.203 442.424 328.261 441.883C327.32 441.341 326.296 440.813 325.188 440.297C324.08 439.781 323.055 439.169 322.113 438.461C321.172 437.752 320.387 436.901 319.755 435.909C319.123 434.917 318.808 433.672 318.808 432.177C318.808 431.095 319.001 430.128 319.388 429.277C319.775 428.427 320.321 427.705 321.031 427.112C321.74 426.52 322.584 426.061 323.564 425.74C324.543 425.417 325.639 425.256 326.851 425.256C328.423 425.256 329.86 425.379 331.163 425.624C332.464 425.869 333.488 426.171 334.236 426.532C334.236 426.971 334.203 427.48 334.139 428.059C334.075 428.64 333.997 429.239 333.907 429.857C333.816 430.476 333.72 431.076 333.617 431.655C333.513 432.236 333.411 432.745 333.308 433.183H332.303L330.756 427.885C330.287 427.68 329.695 427.525 328.98 427.421C328.265 427.319 327.504 427.267 326.697 427.267C325.371 427.267 324.304 427.635 323.497 428.369C322.691 429.103 322.288 430.128 322.288 431.443C322.288 432.5 322.605 433.389 323.241 434.111C323.876 434.832 324.673 435.477 325.633 436.044C326.592 436.611 327.624 437.159 328.725 437.688C329.828 438.216 330.859 438.828 331.817 439.524C332.777 440.22 333.575 441.045 334.211 441.999C334.847 442.952 335.164 444.139 335.164 445.556C335.164 446.716 334.951 447.773 334.527 448.727C334.1 449.681 333.488 450.492 332.689 451.163C331.889 451.833 330.911 452.349 329.751 452.709C328.591 453.071 327.276 453.251 325.807 453.251C324.183 453.251 322.725 453.057 321.437 452.671C320.148 452.284 319.233 451.872 318.692 451.433C318.717 450.995 318.763 450.467 318.828 449.848C318.891 449.229 318.969 448.591 319.059 447.933C319.149 447.276 319.247 446.639 319.349 446.02C319.452 445.401 319.555 444.873 319.659 444.435H320.664L322.249 450.119Z"
                fill="#4D4D4D"
              />
              <path
                d="M357.822 425.72C357.796 426.751 357.752 427.79 357.686 428.832C357.622 429.876 357.526 430.927 357.397 431.984H356.392L354.806 427.731H346.377V437.976H352.68L354.188 435.116H355.154C355.309 437.668 355.309 440.272 355.154 442.927H354.188L352.68 439.988H346.377V450.776H355.27L357.165 446.136H358.132C358.312 447.219 358.441 448.314 358.518 449.422C358.596 450.531 358.609 451.652 358.557 452.787H339.494V451.666C340.397 451.252 341.453 450.944 342.665 450.738V427.807C342.149 427.706 341.621 427.571 341.08 427.403C340.538 427.235 340.01 427.048 339.494 426.842V425.72H357.822Z"
                fill="#4D4D4D"
              />
              <path
                d="M367.875 450.119C368.184 450.428 368.583 450.693 369.074 450.912C369.563 451.131 370.298 451.24 371.278 451.24C372.102 451.24 372.875 451.131 373.598 450.912C374.319 450.693 374.944 450.369 375.472 449.944C376 449.52 376.42 449.004 376.73 448.399C377.039 447.793 377.194 447.103 377.194 446.329C377.194 445.299 376.878 444.435 376.246 443.739C375.614 443.043 374.828 442.424 373.887 441.883C372.946 441.341 371.922 440.813 370.814 440.297C369.706 439.781 368.68 439.169 367.739 438.461C366.798 437.752 366.012 436.901 365.38 435.909C364.748 434.917 364.434 433.672 364.434 432.177C364.434 431.095 364.627 430.128 365.014 429.277C365.4 428.427 365.947 427.705 366.656 427.112C367.366 426.52 368.21 426.061 369.19 425.74C370.168 425.417 371.264 425.256 372.476 425.256C374.048 425.256 375.486 425.379 376.788 425.624C378.09 425.869 379.114 426.171 379.86 426.532C379.86 426.971 379.83 427.48 379.764 428.059C379.699 428.64 379.624 429.239 379.532 429.857C379.442 430.476 379.346 431.076 379.243 431.655C379.139 432.236 379.035 432.745 378.934 433.183H377.928L376.382 427.885C375.912 427.68 375.32 427.525 374.606 427.421C373.891 427.319 373.13 427.267 372.323 427.267C370.996 427.267 369.93 427.635 369.123 428.369C368.316 429.103 367.914 430.128 367.914 431.443C367.914 432.5 368.231 433.389 368.867 434.111C369.502 434.832 370.299 435.477 371.259 436.044C372.218 436.611 373.25 437.159 374.351 437.688C375.454 438.216 376.484 438.828 377.444 439.524C378.403 440.22 379.202 441.045 379.838 441.999C380.472 442.952 380.791 444.139 380.791 445.556C380.791 446.716 380.576 447.773 380.152 448.727C379.726 449.681 379.114 450.492 378.314 451.163C377.515 451.833 376.536 452.349 375.376 452.709C374.216 453.071 372.902 453.251 371.432 453.251C369.808 453.251 368.351 453.057 367.063 452.671C365.774 452.284 364.859 451.872 364.318 451.433C364.343 450.995 364.388 450.467 364.454 449.848C364.516 449.229 364.595 448.591 364.684 447.933C364.775 447.276 364.872 446.639 364.975 446.02C365.078 445.401 365.18 444.873 365.284 444.435H366.29L367.875 450.119Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>

          <Button
            ghost
            key="button"
            {...dataSource.button}
            href="#quienes-somos"
          >
            {dataSource.button.children}
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: "-=20",
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
