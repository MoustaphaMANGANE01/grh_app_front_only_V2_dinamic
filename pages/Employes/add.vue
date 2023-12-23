<template>
  <div class="py-20 px-20 mx-auto bg-gray-900 sm:px-0 sm:w-full md:p-0 lg:p-20">
    <div class="headTitle flex justify-between mb-4">
      <div class="leftTitle">
        <h4 class="text-2xl font-bold"
        :class="{'text-gray-900':!isDarkMode,  'text-white':isDarkMode}">Profile</h4>
      </div>
      <div class="rightContent">
        <!-- <div class="exportContent inline-block relative group">
          <button
            type="button"
            class="peer inline-flex items-center text-gray-500 bg-white hover:bg-gray-100 font-medium rounded-xl text-sm px-3 py-2 dark:bg-surface dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <span class="sr-only">Export button</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8989 9.75503C13.1994 9.48146 13.6647 9.50325 13.9383 9.8037C14.2118 10.1041 14.1901 10.5695 13.8896 10.8431L9.99852 14.3861L6.10744 10.8431C5.80699 10.5695 5.7852 10.1041 6.05877 9.8037C6.33235 9.50325 6.79768 9.48146 7.09813 9.75503L9.26278 11.726V2.73574C9.26278 2.3294 9.59218 2 9.99852 2C10.4049 2 10.7343 2.3294 10.7343 2.73574V11.726L12.8989 9.75503ZM3.45455 14.3633C3.45455 13.9617 3.12893 13.6361 2.72727 13.6361C2.32561 13.6361 2 13.9617 2 14.3633V15.333C2 16.8058 3.19391 17.9997 4.66667 17.9997H15.3333C16.8061 17.9997 18 16.8058 18 15.333V14.3633C18 13.9617 17.6744 13.6361 17.2727 13.6361C16.8711 13.6361 16.5455 13.9617 16.5455 14.3633V15.333C16.5455 16.0025 16.0028 16.5451 15.3333 16.5451H4.66667C3.99723 16.5451 3.45455 16.0025 3.45455 15.333V14.3633Z"
                fill="#93959C"
              ></path>
            </svg>
            <span class="mx-1">Export</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8716 5.22872C11.0766 5.43375 11.0766 5.76616 10.8716 5.97118L7.00039 9.84241L3.12916 5.97118C2.92413 5.76616 2.92413 5.43375 3.12916 5.22872C3.33418 5.02369 3.6666 5.02369 3.87162 5.22872L7.00039 8.35749L10.1292 5.22872C10.3342 5.02369 10.6666 5.02369 10.8716 5.22872Z"
                fill="#93959C"
              ></path>
            </svg>
          </button>
          <div
            class="absolute right-0 z-10 w-48 p-3 bg-white rounded-xl dark:bg-surface drop-shadow-[0px_10px_40px_#00000080] duration-300 opacity-0 invisible translate-y-[calc(50%)] group-hover:block group-hover:opacity-100 group-hover:visible group-hover:translate-y-[calc(2px)]"
          >
            <div>
              <button
                type="button"
                class="relative group inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-xl hover:bg-gray-100 dark:text-bodyDark dark:border-gray-600 dark:hover:bg-overlayLight dark:hover:text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 mr-2 fill-bodyLight group-hover:fill-black dark:fill-bodyDark dark:hover:fill-white"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.89979 2.75C4.89979 2.33579 5.23557 2 5.64979 2H14.3492C14.7634 2 15.0992 2.33579 15.0992 2.75V7.07461H15.7991C16.3825 7.07461 16.9421 7.30638 17.3546 7.71894C17.7672 8.1315 17.999 8.69106 17.999 9.27451V12.8992C17.999 13.4827 17.7672 14.0422 17.3546 14.4548C16.9421 14.8674 16.3825 15.0991 15.7991 15.0991H15.0992V17.2489C15.0992 17.6632 14.7634 17.9989 14.3492 17.9989H5.64979C5.23557 17.9989 4.89979 17.6632 4.89979 17.2489V15.0991H4.1999C3.61645 15.0991 3.05689 14.8674 2.64433 14.4548C2.23177 14.0422 2 13.4827 2 12.8992V9.27451C2 8.69106 2.23177 8.13151 2.64433 7.71894C3.05689 7.30638 3.61645 7.07461 4.1999 7.07461H4.89979V2.75ZM6.39979 14.3518C6.39979 14.3509 6.39979 14.35 6.39979 14.3491C6.39979 14.3482 6.39979 14.3473 6.39979 14.3464V12.1994H13.5992V16.4989H6.39979V14.3518ZM4.89979 13.5991H4.1999C4.01427 13.5991 3.83625 13.5254 3.70499 13.3941C3.57374 13.2629 3.5 13.0849 3.5 12.8992V9.27451C3.5 9.08888 3.57374 8.91086 3.70499 8.7796C3.83625 8.64835 4.01427 8.57461 4.1999 8.57461H5.64368L5.64979 8.57463L5.65589 8.57461H14.3431L14.3492 8.57463L14.3553 8.57461H15.7991C15.9847 8.57461 16.1627 8.64835 16.294 8.7796C16.4252 8.91086 16.499 9.08888 16.499 9.27451V12.8992C16.499 13.0849 16.4252 13.2629 16.294 13.3941C16.1627 13.5254 15.9847 13.5991 15.7991 13.5991H15.0992V11.4494C15.0992 11.0351 14.7634 10.6994 14.3492 10.6994H5.64979C5.23557 10.6994 4.89979 11.0351 4.89979 11.4494V13.5991ZM13.5992 3.5V7.07461H6.39979V3.5H13.5992Z"
                    fill="#8A9099"
                  ></path>
                </svg>

                Print
              </button>
              <button
                type="button"
                class="relative group inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-xl hover:bg-gray-100 dark:text-bodyDark dark:border-gray-600 dark:hover:bg-overlayLight dark:hover:text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 mr-2 fill-bodyLight dark:fill-bodyDark"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.09456 2.64437C4.50714 2.23178 5.06672 2 5.6502 2H10.7252C10.9241 2 11.1149 2.07902 11.2555 2.21967L16.3305 7.29467C16.4712 7.43532 16.5502 7.62609 16.5502 7.825V15.8C16.5502 16.3835 16.3184 16.9431 15.9058 17.3556C15.4933 17.7682 14.9337 18 14.3502 18H5.6502C5.06672 18 4.50714 17.7682 4.09456 17.3556C3.68198 16.9431 3.4502 16.3835 3.4502 15.8V4.2C3.4502 3.61652 3.68198 3.05695 4.09456 2.64437ZM5.6502 3.5C5.46454 3.5 5.2865 3.57375 5.15522 3.70503C5.02395 3.8363 4.9502 4.01435 4.9502 4.2V15.8C4.9502 15.9857 5.02394 16.1637 5.15522 16.295C5.2865 16.4263 5.46454 16.5 5.6502 16.5H14.3502C14.5358 16.5 14.7139 16.4263 14.8452 16.295C14.9764 16.1637 15.0502 15.9857 15.0502 15.8V8.13566L10.4145 3.5H5.6502Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.7256 2C11.1398 2 11.4756 2.33579 11.4756 2.75V7.075H15.8006C16.2148 7.075 16.5506 7.41079 16.5506 7.825C16.5506 8.23921 16.2148 8.575 15.8006 8.575H10.7256C10.3114 8.575 9.97559 8.23921 9.97559 7.825V2.75C9.97559 2.33579 10.3114 2 10.7256 2Z"
                  ></path>
                  <path
                    d="M8.11242 13.9188L7.45472 12.962L6.87522 13.9188H5.98296L7.01779 12.33L5.95996 10.7945H6.87522L7.52371 11.738L8.09402 10.7945H8.98628L7.96064 12.37L9.02767 13.9188H8.11242Z"
                  ></path>
                  <path
                    d="M10.209 13.3314H11.2392V13.9188H9.42249V10.7945H10.209V13.3314Z"
                  ></path>
                  <path
                    d="M12.7825 13.95C12.5465 13.95 12.3349 13.9129 12.1478 13.8387C11.9608 13.7646 11.8106 13.6548 11.6971 13.5094C11.5867 13.364 11.5285 13.1889 11.5223 12.9842H12.3594C12.3717 13.0999 12.4131 13.1889 12.4836 13.2513C12.5541 13.3106 12.6461 13.3403 12.7596 13.3403C12.8761 13.3403 12.9681 13.315 13.0355 13.2646C13.103 13.2112 13.1367 13.1385 13.1367 13.0465C13.1367 12.9694 13.1091 12.9056 13.0539 12.8551C13.0018 12.8047 12.9359 12.7632 12.8561 12.7305C12.7795 12.6979 12.6691 12.6608 12.525 12.6193C12.3165 12.557 12.1463 12.4946 12.0145 12.4323C11.8826 12.37 11.7692 12.278 11.6741 12.1564C11.5791 12.0347 11.5315 11.876 11.5315 11.6802C11.5315 11.3894 11.6404 11.1624 11.8581 10.9992C12.0758 10.8331 12.3594 10.75 12.709 10.75C13.0646 10.75 13.3513 10.8331 13.569 10.9992C13.7867 11.1624 13.9032 11.3909 13.9186 11.6846H13.0677C13.0616 11.5838 13.0232 11.5051 12.9527 11.4487C12.8822 11.3894 12.7917 11.3597 12.6814 11.3597C12.5863 11.3597 12.5097 11.385 12.4514 11.4354C12.3931 11.4829 12.364 11.5526 12.364 11.6446C12.364 11.7455 12.4131 11.8241 12.5112 11.8805C12.6093 11.9368 12.7626 11.9977 12.9711 12.0629C13.1796 12.1312 13.3483 12.1965 13.477 12.2588C13.6089 12.3211 13.7223 12.4116 13.8174 12.5303C13.9124 12.6489 13.96 12.8017 13.96 12.9887C13.96 13.1667 13.9124 13.3284 13.8174 13.4738C13.7254 13.6192 13.5905 13.7349 13.4126 13.8209C13.2348 13.907 13.0248 13.95 12.7825 13.95Z"
                  ></path>
                </svg>

                Excel
              </button>
            </div>
          </div>
        </div> -->
        <!-- <button
          type="button"
          class="inline-flex items-center ml-2 text-gray-500 bg-blue-500 hover:bg-gray-100 font-medium rounded-xl text-sm px-3 py-2 dark:bg-accent dark:text-white dark:hover:bg-gray-700"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H9V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H11V5Z"
              fill="white"
            ></path>
          </svg>
        </button> -->
      </div>
    </div>
    <div
      class=" p-5 overflow-hidden shadow rounded-lg w-full md:w-full"
      :class="{'bg-gray-800':isDarkMode,'bg-white  ':!isDarkMode}"
    >
      <div class="px-2 py-5 sm:px-6  flex justify-center rounded-xl"
      :class="{'bg-blue-900':!isDarkMode,'bg-gray-900':isDarkMode}">
        <h2 class="md:text-2xl sm:text-sm text-white leading-6 font-bold "
        :class="{'text-white':isDarkMode,}">
          Enregistrer un employé
        </h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
<form @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">Identité</h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="photo"
                  class="block text-sm font-semibold "
                   :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"
                  >Photo</label
                >
                <input
                  type="file"
                  name="photo"
                  class="mt-1 p-2 w-full  border rounded-md"
                  :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  id="photo"
                  @change="handlePhotoChange"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="prenom"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Prénom</label
                >
                <input
                  v-model="prenom"
                  type="text"
                  name="prenom"
                  id="prenom"
                  class="mt-1 p-2 w-full  border rounded-md"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="nom"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Nom</label
                >
                <input
                  v-model="name"
                  type="text"
                  name="nom"
                  id="nom"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>
            </div>
          </div>

          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">Contacts</h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="phone"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Téléphone</label
                >
                <input
                  v-model="phone"
                  type="tel"
                  name="telephone"
                  id="phone"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="adresse"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Adresse</label
                >
                <input
                  v-model="adresse"
                  type="text"
                  name="adresse"
                  id="adresse"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="email"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Email</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>
            </div>
          </div>

          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">
              Infos Personnels
            </h5>

            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="sexe"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Genre</label
                >
                <input
                  v-model="sexe"
                  type="text"
                  name="sexe"
                  id="sexe" 
                  :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="situation_matrimonial"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >S.Matrimoniale</label
                >

                <select
                  v-model="situation_matrimonial"
                  aria-placeholder="Situation Matrimoniale"
                  type="text"
                  name="situation_matrimonial"
                  id="situation_matrimonial"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                >
                  <option value="celibataire">Célibataire</option>
                  <option value="marier">Marié</option>
                  <option value="veuf">Veuve</option>
                </select>
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="nombre_enfants"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Nombre d'Enfants</label
                >
                <input
                  v-model="nombre_enfants"
                  type="number"
                  name="nombre_enfants"
                  id="nombre_enfants"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="date_de_naissance"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Date de Naissance</label
                >
                <input
                  v-model="date_de_naissance"
                  type="date"
                  name="date_de_naissance"
                  id="date_de_naissance"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>
            </div>
          </div>

          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">
              Infos Entreprise
            </h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="type_de_contrat"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Type de Contrat</label
                >
                <select
                  v-model="type_de_contrat"
                  type="text"
                  name="type_de_contrat"
                  id="type_de_contrat"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                >
                  <option value="cdi">CDI</option>
                  <option value="cdd">CDD</option>
                  <option value="stage">Stage</option>
                  <option value="prestation">Prestataire</option>
                </select>
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="salaire"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Salaire</label
                >
                <input
                  v-model="salaire"
                  type="number"
                  name="salaire"
                  id="salaire"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="date_entree"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Date d'Entrée</label
                >
                <input
                  v-model="date_entree"
                  type="date"
                  name="date_entree"
                  id="date_entree"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="role"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Rôle</label
                >
                <select
                  v-model="role"
                  name="role"
                  id="role"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                >
                  <option value="admin">Admin</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="employe">Employé</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">Soldes</h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="solde_points"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Solde Points</label
                >
                <input
                  v-model="solde_points"
                  type="number"
                  name="solde_points"
                  id="solde_points"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full  border rounded-md"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="solde_conges"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Solde Congés</label
                >
                <input
                  v-model="solde_conges"
                  type="number"
                  name="solde_conges"
                  id="solde_conges"
                   :class="{'bg-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="flex items-center">
              <button
                type="submit"
                 :class="{'bg-gray-900':isDarkMode, 'bg-blue-900':!isDarkMode}"
                class=" text-white flex justify-center w-full py-2 rounded-xl"
              >
                Enregistrer
              </button>
            </div>
          </div>

          <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isDarkMode:false,
      photo: null,
      prenom: "",
      name: "",
      adresse: "",
      email: "",
      sexe: "",
      phone: "",
      situation_matrimonial: "",
      nombre_enfants: "",
      type_de_contrat: "",
      date_de_naissance: "",
      salaire: "",
      date_entree: "",
      solde_points: "",
      solde_conges: "",
      role: "",
      error: null,
    };
  },
  methods: {
  handlePhotoChange(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const image = new Image();
          image.src = reader.result;

          image.onload = () => {
            const { width, height } = imageSize(Buffer.from(reader.result));

            const maxSizeInBytes = 2048 * 1024; // 2 Mo
            const currentSizeInBytes = file.size;

            if (currentSizeInBytes > maxSizeInBytes) {
              const aspectRatio = width / height;
              const maxWidth = Math.sqrt(maxSizeInBytes * aspectRatio);
              const maxHeight = maxWidth / aspectRatio;

              let newWidth = width;
              let newHeight = height;

              if (width > maxWidth || height > maxHeight) {
                const aspectRatio = width / height;

                if (width > height) {
                  newWidth = maxWidth;
                  newHeight = maxWidth / aspectRatio;
                } else {
                  newHeight = maxHeight;
                  newWidth = maxHeight * aspectRatio;
                }
              }

              const canvas = document.createElement("canvas");
              canvas.width = newWidth;
              canvas.height = newHeight;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(image, 0, 0, newWidth, newHeight);

              canvas.toBlob((blob) => {
                const resizedFile = new File([blob], file.name, { type: file.type });
                this.photo = resizedFile;
              }, file.type);
            } else {
              this.photo = file;
            }
          };
        };

        reader.readAsArrayBuffer(file);
      }
    },
     async submitForm() {
      try {
        if (process.client) {
          const token = localStorage.getItem("token");

          if (!token) {
            console.error(
              "Pas de jeton d'authentification disponible. Assurez-vous que l'utilisateur est authentifié."
            );
            return;
          }

          const formData = new FormData();
if (this.photo instanceof File) {
  formData.append("photo", this.photo);
}
          formData.append("prenom", this.prenom);
          formData.append("name", this.name);
          formData.append("adresse", this.adresse);
          formData.append("email", this.email);
          formData.append("sexe", this.sexe);
          formData.append("phone", this.phone);
          formData.append("situation_matrimonial", this.situation_matrimonial);
          formData.append("nombre_enfants", this.nombre_enfants);
          formData.append("type_de_contrat", this.type_de_contrat);
          formData.append("date_de_naissance", this.date_de_naissance);
          formData.append("salaire", this.salaire);
          formData.append("date_entree", this.date_entree);
          formData.append("solde_points", this.solde_points);
          formData.append("solde_conges", this.solde_conges);
          formData.append("role", this.role);

          const response = await axios.post(
            "http://127.0.0.1:8000/api/v1/employes/store",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
 this.$router.push({ name: "Employes" });
          console.log("Réponse du serveur :", response.data);
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire :", error);
        this.error = "Une erreur s'est produite lors de l'enregistrement de l'employé.";
      }
    },
  },
};
</script>
  

