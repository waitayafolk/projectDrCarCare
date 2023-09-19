<script>
    import service from '@/plugins/axios';
    import Swal from 'sweetalert2'
    import { thaiDateNotime }from "@/thaiDateNotime";
    export default {
        components: {
    },
    data() {
      return {
        thaiDateNotime,
        bills : {
            admin_id : '' ,
            car_id : '' ,
            created_date : '' ,
            customer_id : '' ,
            detail : [],
            discount : '' ,
            id : '' ,
            mobile : '' ,
            name_admin : '' ,
            name_customer : '' ,
            name_service : '' ,
            percen : 0 ,
            price : 0 ,
            service_group_id : 0 ,
            status : '' ,
            total : 0 ,
        },
        company : {
            company_name : '' ,
            address : '' ,
            facebook : '' ,
            line : '' ,
            mobile : '' ,
            logo : null ,
        }
      }
    },
    mounted() {
        this.getBill()
    },
    methods: {
        async getBill() {
            let bill_id = new URL(window.location).search.split('?bill_id=')[1]
            let data = {
                bill_id : bill_id
            }
            await service({ method: 'post', url: '/getbill', data: data, params: [] })
            .then((response) => {
                this.company = response.company
                this.bills = response.bill[0]
                // this.bills = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
  }
</script>

<template>
    <!-- <button className="printPageButton" @click="window.print();">
        Print
    </button> -->
    <div style="width: 80mm; padding: 20px; background-color: white;">
        <table width="100%">
            <tr>
                <td class="text-end">
                    <div class="text-end">
                        เลขที่บิล: {{ bills.id }}
                    </div>
                </td>
            </tr>
            <tr>
                <td class="text-end">
                    <div class="text-end">
                        วันที่ {{ `${new Date(bills.created_date).getFullYear()}-${String(new Date(bills.created_date).getMonth()+1).padStart(2, '0')}-${String(new Date(bills.created_date).getDate()).padStart(2, '0')} ${String(new Date(bills.created_date).getHours()).padStart(2, '0')}:${String(new Date(bills.created_date).getMinutes()).padStart(2, '0')}`  }}
                    </div>
                </td>
            </tr>
            <td style="text-align: center;">
                <img :src="`http://188.166.221.231:4600/upload/image/${company.logo}`" style="width: 30mm;" alt="LOGO"/>
            </td>
            <tr>
              <td style="font-size: 18px; text-align: center;">
                <strong>ชื่อร้าน {{ company.company_name }}</strong>
              </td>
            </tr>
            <tr>
              <td style="font-size: 18px; text-align: center;">
                <strong>เบอร์โทร {{ company.mobile }}</strong>
              </td>
            </tr>
            <tr>
              <td style="font-size: 18px; text-align: center;">
                <strong>Lind ID : {{ company.line }}</strong>
              </td>
            </tr>
            <tr>
              <td style="font-size: 18px; text-align: center;">
                {{ company.address }}
              </td>
            </tr>
            <tr>
              <td style="font-size: 18px; text-align: center;">
                <strong>ใบเสร็จรับเงิน</strong>
              </td>
            </tr>
            <tr>
              <td style="font-size: 16px; text-align: left;">
                ลูกค้า : {{ bills.name_customer }}
              </td>
            </tr>
            <tr>
              <td style="font-size: 16px; text-align: left;">
                เบอร์โทรลูกค้า : {{ bills.mobile }}
              </td>
            </tr>
        </table>
        <hr>
        <hr>
        <!-- <strong>รายการ</strong> -->
        <VTable density="compact" >
            <thead>
                <tr>
                    <th style="text-align: start;">
                        รายการ
                    </th>
                    <th style="text-align: end;">
                        ราคา
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of bills.detail">
                    <td style="text-align: start;">{{ item.title }}</td>
                    <td style="text-align: end;">{{ (item.price - item.discount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td style="text-align: start;"></td>
                    <td style="text-align: end;">ยอดรวม : {{ bills.total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}</td>
                </tr>
            </tbody>
            
        </VTable>
        
    </div>
    
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
@media print {
  * {
    padding-top: 5px;
    margin : 0 ;
    padding : 0 ;
    width: "5.8cm";
    margin: "0";
    padding: "15px";
  }
  .printPageButton {
   display: none;
  }
}

@media print {
  .pageBreakForBillEmployeeSalary {
    page-break-after: always;
  }

}
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>